import os
from typing import List
from pathlib import Path

class EndpointPathsFinder:
    def __init__(self):
        self.spec_path = "."

    def get_folders(self, path: str) -> List[Path]:
        return [f for f in os.listdir(path) if os.path.isdir(os.path.join(path, f))]

    def is_endpoint_group_folder(self, folder: str) -> bool:
        # Other than _global, any folder starting with underscore is
        # not an endpoint group folder
        if folder == "_global":
            return True
        if folder.startswith("_"):
            return False
        return True

    def get_endpoint_group_folders(self) -> List[Path]:  
        folders = self.get_folders(self.spec_path)
        return [f for f in folders if self.is_endpoint_group_folder(f)]

    def is_endpoint_folder(self, folder: str) -> bool:
        if folder == "_types":
            return False
        return True 

    def get_endpoint_folders(self, path: str) -> List[Path]:
        folders = self.get_folders(path)
        return [f for f in folders if self.is_endpoint_folder(f)]

    def get_endpoint_paths(self) -> List[str]:
        endpoint_paths = []
        group_folders = self.get_endpoint_group_folders()
        for group_folder in group_folders:
            group_path = os.path.join(self.spec_path, group_folder)
            group_endpoint_folders = self.get_endpoint_folders(group_path)
            for endpoint_folder in group_endpoint_folders:
                endpoint_paths.append(os.path.join(group_path, endpoint_folder))
        return endpoint_paths

    def find_paths(self) -> List[str]:
        return self.get_endpoint_paths()