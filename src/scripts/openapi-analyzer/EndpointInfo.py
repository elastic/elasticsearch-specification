from openapi_pydantic.v3.v3_0 import PathItem
from constants import ENDPOINT_OPERATIONS

class EndpointInfo:
    def __init__(self, path: str):
        self.path = path
        self.operations = {}
        self.summary = None
        self.description = None
        self.parameters = []
    
    def init(self, path_item: PathItem):
        self.summary = path_item.summary
        self.description = path_item.description
        self.parameters = path_item.parameters
        for operation in ENDPOINT_OPERATIONS:
            if getattr(path_item, operation):
                self.operations[operation] = getattr(path_item, operation)

    @staticmethod
    def from_path(path: str, path_item: PathItem):
        endpoint_info = EndpointInfo(path)
        endpoint_info.init(path_item)
        return endpoint_info