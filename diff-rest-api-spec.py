#!/usr/bin/env python3
"""
Script to generate and diff REST API specifications.

This script:
1. Runs `make generate` to generate the schema
2. Runs the Rust compiler to generate REST API output
3. Diffs JSON files between rest-api-spec and the generated output
"""

import os
import subprocess
import sys
import json
from pathlib import Path
import difflib


def run_command(cmd, cwd=None, description=None):
    """Run a shell command and handle errors."""
    if description:
        print(f"Running: {description}")

    print(f"Executing: {cmd}")

    try:
        result = subprocess.run(
            cmd, shell=True, cwd=cwd, check=True, capture_output=True, text=True
        )
        print(f"✓ Success: {description or cmd}")
        if result.stdout.strip():
            print(f"Output: {result.stdout.strip()}")
        return result
    except subprocess.CalledProcessError as e:
        print(f"✗ Failed: {description or cmd}")
        print(f"Error code: {e.returncode}")
        if e.stdout:
            print(f"Stdout: {e.stdout}")
        if e.stderr:
            print(f"Stderr: {e.stderr}")
        sys.exit(1)


def remove_descriptions(key, obj):
    """Recursively remove 'description' fields from JSON object."""
    if isinstance(obj, dict):
        return {
            k: remove_descriptions(k, v) for k, v in obj.items() if k != "description"
        }
    elif isinstance(obj, list):
        if key == "options":
            return sorted(obj)
        return [remove_descriptions("item", item) for item in obj]
    else:
        return obj


def compare_json_files(file1, file2):
    """Compare two JSON files and return diff if they differ, ignoring description fields."""
    try:
        with open(file1, "r") as f1, open(file2, "r") as f2:
            json1 = json.load(f1)
            json2 = json.load(f2)

        # Remove description fields
        json1_no_desc = remove_descriptions("root", json1)
        json2_no_desc = remove_descriptions("root", json2)

        # Pretty print for comparison
        json1_str = json.dumps(json1_no_desc, indent=2, sort_keys=True)
        json2_str = json.dumps(json2_no_desc, indent=2, sort_keys=True)

        if json1_str == json2_str:
            return None

        # Generate diff
        diff = difflib.unified_diff(
            json1_str.splitlines(keepends=True),
            json2_str.splitlines(keepends=True),
            fromfile=str(file1),
            tofile=str(file2),
            lineterm="",
        )
        return list(diff)
    except Exception as e:
        return [f"Error comparing {file1} and {file2}: {str(e)}"]


def main():
    """Main function to execute the workflow."""
    script_dir = Path(__file__).parent
    compiler_dir = script_dir / "compiler-rs" / "clients_schema_to_rest_api_spec"

    print("=== Elasticsearch REST API Spec Diff Tool ===\n")

    # Step 1: Run make generate
    run_command("make generate", cwd=script_dir, description="Generate schema")

    # Step 2: Run Rust compiler
    rust_cmd = "cargo run -- -i ../../output/schema/schema.json -o ./rest-api-output/"
    run_command(rust_cmd, cwd=compiler_dir, description="Generate REST API output")

    # Step 3: Compare JSON files
    print("\n=== Comparing JSON files ===")

    spec_dir = (
        script_dir
        / "../elasticsearch/rest-api-spec/src/main/resources/rest-api-spec/api"
    ).resolve()
    output_dir = compiler_dir / "rest-api-output"

    # Get all JSON files from spec directory
    spec_files = list(spec_dir.glob("**/*.json"))

    if not spec_files:
        print(f"No JSON files found in {spec_dir}")
        sys.exit(1)

    total_diffs = 0
    for spec_file in sorted(spec_files):
        if spec_file.name == "_common.json":
            continue  # Skip common file
        if spec_file.name.startswith("fleet"):
            continue  # Fleet files are deliberately empty in rest-api-spec

        api_name = spec_file.stem
        if "." in api_name:
            namespace, api_name, _ = spec_file.name.split(".")
        else:
            namespace = "_global"
        if not os.path.exists(script_dir / "specification" / namespace / api_name):
            continue

        # Find corresponding file in output directory
        relative_path = spec_file.relative_to(spec_dir)
        output_file = output_dir / relative_path

        print(f"Comparing: {relative_path}")
        diff = compare_json_files(spec_file, output_file)

        if diff:
            print(f"✗ Differences found in {relative_path}")
            for line in diff:
                print(line.rstrip("\n"))
                if line.startswith("+") or line.startswith("-"):
                    total_diffs += 1
            print("-" * 80)
        else:
            print(f"✓ No differences in {relative_path}")

    print(f"\nTotal differences found: {total_diffs}")


if __name__ == "__main__":
    main()
