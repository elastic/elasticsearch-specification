import os
from dataclasses import dataclass, field
from EndpointInfo import EndpointInfo
from constants import ENDPOINT_OPERATIONS
from openapi_pydantic.v3.v3_0 import OpenAPI, Reference


@dataclass 
class RequestStats:
    num_operations: int = 0
    num_with_body: int = 0
    num_with_examples: int = 0
    num_examples: int = 0
    content_types: set[str] = field(default_factory=set)

@dataclass
class ResponseCodeStats:
    num_operations: int = 0
    num_with_body: int = 0
    num_with_examples: int = 0
    num_examples: int = 0
    content_types: set[str] = field(default_factory=set)

@dataclass 
class ResponseStats:
    num_operations: int = 0

@dataclass
class OperationStats:
    request_stats: RequestStats = field(default_factory=RequestStats)
    response_stats: dict[str, ResponseCodeStats] = field(default_factory=dict)

@dataclass
class DetailedStats:
    num_endpoints: int = 0
    num_operations: int = 0
    operation_stats: dict[str, OperationStats] = field(default_factory=dict)


class DetailedStatsGenerator:
    def __init__(self, openapi_spec: OpenAPI):
        self.openapi_spec = openapi_spec

    def get_endpoint_info_list(self) -> list[EndpointInfo]:
        endpoint_info_list = []
        for path, path_item in self.openapi_spec.paths.items():
            endpointInfo = EndpointInfo.from_path(path, path_item)
            endpoint_info_list.append(endpointInfo)
        return endpoint_info_list

    def get_detailed_stats(self) -> DetailedStats:
        endpoint_info_list = self.get_endpoint_info_list()
        stats = DetailedStats()
        stats.num_endpoints = len(endpoint_info_list)
        for operation in ENDPOINT_OPERATIONS:
            for endpoint_info in endpoint_info_list:
                if operation in endpoint_info.operations:
                    stats.num_operations += 1
                    if operation not in stats.operation_stats:
                        stats.operation_stats[operation] = OperationStats()
                    operation_stats = stats.operation_stats[operation]
                    operation_stats.request_stats.num_operations += 1
                    if endpoint_info.operations[operation].requestBody:
                        requestBody = endpoint_info.operations[operation].requestBody
                        if isinstance(requestBody, Reference):
                            component_request_ref = os.path.basename(requestBody.ref)
                            requestBody = self.openapi_spec.components.requestBodies[component_request_ref] 
                        for content_type, media_type in requestBody.content.items():
                            operation_stats.request_stats.content_types.add(content_type)
                            if media_type.examples:
                                operation_stats.request_stats.num_with_examples += 1
                                operation_stats.request_stats.num_examples += len(media_type.examples)
                        operation_stats.request_stats.num_with_body += 1
                    if endpoint_info.operations[operation].responses:
                        for response_code, response in endpoint_info.operations[operation].responses.items():
                            if response_code not in operation_stats.response_stats: 
                                operation_stats.response_stats[response_code] = ResponseCodeStats()
                            operation_stats.response_stats[response_code].num_operations += 1
                            if isinstance(response, Reference):
                                component_response_ref = os.path.basename(response.ref)
                                response = self.openapi_spec.components.responses[component_response_ref]
                            if response.content:
                                for content_type, media_type in response.content.items():
                                    operation_stats.response_stats[response_code].content_types.add(content_type)
                                    if media_type.examples:
                                        operation_stats.response_stats[response_code].num_with_examples += 1
                                        operation_stats.response_stats[response_code].num_examples += len(media_type.examples)
                                operation_stats.response_stats[response_code].num_with_body += 1    
        return stats
    
    def print_detailed_stats(self, stats: DetailedStats):
        print("========================")
        print("==== Detailed Stats ====")
        print("========================")
        print(f"Number of endpoints: {stats.num_endpoints}")
        print(f"Number of operations: {stats.num_operations}")  
        for operation, operation_stats in stats.operation_stats.items():
            print(f"    {operation}: {operation_stats.request_stats.num_operations}")
            print("        Requests:")
            print(f"            with body: {operation_stats.request_stats.num_with_body}")
            print("                  Content types:")
            for content_type in operation_stats.request_stats.content_types:
                print(f"                      {content_type}")
            print(f"            Has examples: {operation_stats.request_stats.num_with_examples}")
            print(f"            Number of examples: {operation_stats.request_stats.num_examples}")
            for response_code, response_code_stats in operation_stats.response_stats.items():
                print("        Responses:")
                print(f"           '{response_code}': {response_code_stats.num_operations}")
                print(f"              Has content: {response_code_stats.num_with_body}")
                print("                  Content types:")
                for content_type in response_code_stats.content_types:
                    print(f"                      {content_type}")
                print(f"              Has examples: {response_code_stats.num_with_examples}")
                print(f"              Number of examples: {response_code_stats.num_examples}")
        print()
