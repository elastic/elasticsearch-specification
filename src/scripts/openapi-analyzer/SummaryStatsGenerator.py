from dataclasses import dataclass, field
from DetailedStatsGenerator import DetailedStats


@dataclass
class SummaryStats:
    num_endpoints: int = 0
    num_operations: int = 0
    num_requests_with_body: int = 0
    num_requests_with_examples: int = 0
    num_request_examples: int = 0
    num_responses_with_body: int = 0
    num_responses_with_examples: int = 0
    num_response_examples: int = 0
    num_examples: int = 0
    request_content_types: set[str] = field(default_factory=set)
    response_content_types: set[str] = field(default_factory=set)


class SummaryStatsGenerator:
    def __init__(self, detailed_stats: DetailedStats):
        self.detailed_stats = detailed_stats

    def get_summary_stats(self) -> SummaryStats:
        summary_stats = SummaryStats()
        summary_stats.num_endpoints = self.detailed_stats.num_endpoints
        summary_stats.num_operations = self.detailed_stats.num_operations
        for _operation, operation_stats in self.detailed_stats.operation_stats.items():
            summary_stats.num_requests_with_body += operation_stats.request_stats.num_with_body
            summary_stats.num_requests_with_examples += operation_stats.request_stats.num_with_examples
            summary_stats.num_request_examples += operation_stats.request_stats.num_examples
            summary_stats.request_content_types.update(operation_stats.request_stats.content_types)
            for _response_code, response_code_stats in operation_stats.response_stats.items():
                summary_stats.num_responses_with_body += response_code_stats.num_with_body
                summary_stats.num_responses_with_examples += response_code_stats.num_with_examples
                summary_stats.num_response_examples += response_code_stats.num_examples
                summary_stats.response_content_types.update(response_code_stats.content_types)
        return summary_stats

    def print_summary_stats(self, stats: SummaryStats):
        print("=======================")
        print("==== Summary Stats ====")
        print("=======================")
        print(f"Number of endpoints: {stats.num_endpoints}")
        print(f"Number of operations: {stats.num_operations}")  
        print("    Requests:")
        print(f"        with body: {stats.num_requests_with_body}")
        print(f"        with examples: {stats.num_requests_with_examples}")
        print(f"        number of examples: {stats.num_request_examples}")  
        print("        Content types:")
        for content_type in stats.request_content_types:
            print(f"            {content_type}")
        print("    Responses:")
        print(f"        with body: {stats.num_responses_with_body}")
        print(f'        with examples: {stats.num_responses_with_examples}')
        print(f"        number of examples: {stats.num_response_examples}")
        print("        Content types:")
        for content_type in stats.response_content_types:
            print(f"            {content_type}")    
        print()