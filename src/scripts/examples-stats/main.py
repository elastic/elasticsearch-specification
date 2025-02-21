#!/usr/bin/python3

import os
from constants import DEFAULT_SPEC_PATH
from ExamplesInfoGenerator import ExamplesInfoGenerator, ExamplesInfo, ExampleStats

def print_stats(stats: ExampleStats):
    print ("===============")
    print ("==== Stats ====")
    print ("===============")
    print(f"Endpoints: {stats.num_endpoints}")
    print(f"Endpoints with no request or response examples: {stats.num_endpoints_with_no_examples}")
    print(f"Endpoints with examples: {stats.num_endpoints_with_examples}")
    print(f"    {stats.num_endpoints_with_only_request_examples:>4}: Only request examples")  
    print(f"    {stats.num_endpoints_with_only_response_examples:>4}: Only response examples")
    print(f"    {stats.num_endpoints_with_both_request_and_response_examples:>4}: Both request and response examples")
    print(f"Endpoints with non-200 response code examples: {stats.num_endpoints_with_non_200_response_code_examples}")    
    print("------------------------")
    print(f"Examples: {stats.num_request_examples + stats.num_response_examples}")
    print(f"    {stats.num_request_examples:>4}: Request examples")
    print(f"    {stats.num_response_examples:>4}: Response examples")
    print(f"Max examples per endpoint: {stats.max_examples_per_endpoint}")
    print ("===============\n")

def main():
    # Using a default spc path. We should add an option 
    # for getting the spec path as a command line argument
    os.chdir(DEFAULT_SPEC_PATH)
    examples_info_generator = ExamplesInfoGenerator()
    examples_info: ExamplesInfo = examples_info_generator.get_examples_info()
    # === print stats
    print_stats(examples_info.stats)
    # === print paths with max examples
    print("Paths with max examples:")
    for endpoint_info in examples_info.endpoints_info:
        if endpoint_info.num_examples == examples_info.stats.max_examples_per_endpoint:
            print(f"    {endpoint_info.path} with {endpoint_info.num_examples} examples")
    print()
    # === print all recognized examples subfolders
    all_examples_subfolders = set()
    all_recognized_examples_subfolders = set()
    for endpoint_info in examples_info.endpoints_info:
        all_examples_subfolders.update(endpoint_info.examples_subfolders)
        all_recognized_examples_subfolders.update(endpoint_info.recognized_examples_subfolders) 
    print("All recognized subfolders of 'examples' folder:")
    for folder in all_recognized_examples_subfolders:
        print(f"    {folder}")
    print()
    # === print unrecognized examples subfolders
    unrecognized_examples_subfolders = all_examples_subfolders - all_recognized_examples_subfolders
    print("unrecognized subfolders of 'examples' folder:")    
    for folder in unrecognized_examples_subfolders:
        print(f"    {folder}")

if __name__ == "__main__":
    main()