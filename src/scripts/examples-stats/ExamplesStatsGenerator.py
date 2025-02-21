from dataclasses import dataclass
from typing import List
from EndpointInfoGenerator import EndpointInfo

@dataclass
class ExampleStats:
    num_endpoints: int = 0
    num_endpoints_with_examples: int = 0
    num_endpoints_with_no_examples: int = 0
    num_endpoints_with_only_request_examples: int = 0
    num_endpoints_with_only_response_examples: int = 0
    num_endpoints_with_both_request_and_response_examples: int = 0
    num_endpoints_with_non_200_response_code_examples: int = 0
    num_request_examples: int = 0
    num_response_examples: int = 0
    max_examples_per_endpoint: int = 0

class ExamplesStatsGenerator:
    def __init__(self, endpoint_info_list: List[EndpointInfo]):
        self.endpoint_info_list = endpoint_info_list
        self.spec_path = "."

    def get_stats(self) -> ExampleStats: 
        stats = ExampleStats()
        for endpoint_info in self.endpoint_info_list:
            stats.num_endpoints += 1

            if endpoint_info.num_examples > 0:
                stats.num_endpoints_with_examples += 1

            if endpoint_info.num_examples > stats.max_examples_per_endpoint:
                stats.max_examples_per_endpoint = endpoint_info.num_examples

            if endpoint_info.num_request_examples > 0 and endpoint_info.num_response_examples == 0:
                stats.num_endpoints_with_only_request_examples += 1
            elif endpoint_info.num_request_examples == 0 and endpoint_info.num_response_examples > 0:
                stats.num_endpoints_with_only_response_examples += 1
            elif endpoint_info.num_request_examples > 0 and endpoint_info.num_response_examples > 0:
                stats.num_endpoints_with_both_request_and_response_examples += 1
            else:
                stats.num_endpoints_with_no_examples += 1

            stats.num_request_examples += endpoint_info.num_request_examples
            stats.num_response_examples += endpoint_info.num_response_examples

            non_200_response_codes = endpoint_info.examples_response_codes - {"200"}
            if len(non_200_response_codes) > 0:
                stats.num_endpoints_with_non_200_response_code_examples += 1
        return stats