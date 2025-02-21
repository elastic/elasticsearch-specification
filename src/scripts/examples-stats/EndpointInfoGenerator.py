import os
import re
from typing import List
from pathlib import Path
from constants import EXAMPLES_FOLDER
from dataclasses import dataclass, field

@dataclass
class EndpointInfo:
    path: str = None
    has_examples_subfolder: bool = False
    num_request_examples: int = 0
    num_response_examples: int = 0
    num_examples: int = 0
    examples_subfolders = []
    recognized_examples_subfolders: set[str] = field(default_factory=set)
    examples_response_codes: set[str] = field(default_factory=set)

class EndpointInfoGenerator:
    def __init__(self):
        self.spec_path = "."

    # Get all the folders in a path
    def get_folders(self, path: str) -> List[Path]:
        return [f for f in os.listdir(path) if os.path.isdir(os.path.join(path, f))]

    def get_files(self, path: str) -> List[str]:
        return [f for f in os.listdir(path) if os.path.isfile(os.path.join(path, f))]

    def is_example_file(self, file: str) -> bool:
        if file.endswith(".yaml"):
            return True
        print(f"WARNING: Found non-YAML example file: {file}")
        return False

    def get_example_files_in_folder(self, path: str) -> List[str]:
        example_files = []
        for file in self.get_files(path):
            if self.is_example_file(file):
                example_files.append(file)
        return example_files

    def get_request_subfolder(self, endpoint_path) -> str:
        examples_path = os.path.join(endpoint_path, EXAMPLES_FOLDER)
        request_examples_path = os.path.join(examples_path, "request")
        if os.path.exists(request_examples_path):
            return "request"
        return None

    def get_response_subfolders(self, endpoint_path) -> int:
        examples_path = os.path.join(endpoint_path, EXAMPLES_FOLDER)
        response_examples_folders = []
        response_examples_path = os.path.join(examples_path, "response")
        if os.path.exists(response_examples_path):
            response_examples_folders.append("response")
        else:
            examples_subfolders = self.get_folders(examples_path)
            for examples_subfolder in examples_subfolders:
                # Look for folders of the pattern "nnn_response"
                if re.match(r"[0-9]{3}_response", examples_subfolder):
                    response_examples_folders.append(examples_subfolder)
        return response_examples_folders

    def get_response_code_from_response_folder(self, folder: str) -> str:
        if folder == "response":
            return "200"
        match = re.match(r"(\d{3})_response", folder)
        if match:
            return match.group(1)
        raise Exception(f"Invalid response folder: {folder}")

    def get_endpoint_info(self, endpoint_path: str) -> EndpointInfo:
        endpoint_path_relative_to_spec = os.path.relpath(endpoint_path, self.spec_path)
        endpoint_info = EndpointInfo(path=endpoint_path_relative_to_spec)
        # If there is no 'examples' folder, return EndpointInfo with
        # default values
        examples_path = os.path.join(endpoint_path, EXAMPLES_FOLDER)
        if not os.path.exists(examples_path):
            return endpoint_info
        endpoint_info.examples_subfolders = self.get_folders(examples_path)
        request_subfolder = self.get_request_subfolder(endpoint_path)
        if request_subfolder:
            endpoint_info.recognized_examples_subfolders.add(request_subfolder)
            examples_request_path = os.path.join(examples_path, request_subfolder)
            endpoint_info.num_request_examples = len(self.get_example_files_in_folder(examples_request_path))
        response_subfolders = self.get_response_subfolders(endpoint_path)
        if (len(response_subfolders) > 0):
                endpoint_info.recognized_examples_subfolders.update(response_subfolders)
                for response_subfolder in response_subfolders:
                    response_code = self.get_response_code_from_response_folder(response_subfolder)
                    endpoint_info.examples_response_codes.add(response_code)  
                    examples_response_path = os.path.join(examples_path, response_subfolder)
                    endpoint_info.num_response_examples += len(self.get_example_files_in_folder(examples_response_path))
        endpoint_info.num_examples = endpoint_info.num_request_examples + endpoint_info.num_response_examples
        return endpoint_info
