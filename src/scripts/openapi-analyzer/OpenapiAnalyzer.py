from DetailedStatsGenerator import DetailedStatsGenerator
from SummaryStatsGenerator import SummaryStatsGenerator
from openapi_pydantic.v3.v3_0 import OpenAPI


class OpenapiAnalyzer:
    def __init__(self, openapi_filepath):
        self.openapi_filepath = openapi_filepath

    def run(self):
        openapi_spec = OpenAPI.parse_file(self.openapi_filepath)
        print(f"OpenAPI version: {openapi_spec.openapi}\n")
        detailed_stats_generator = DetailedStatsGenerator(openapi_spec)  
        detailed_stats = detailed_stats_generator.get_detailed_stats()
        summary_stats_generator = SummaryStatsGenerator(detailed_stats)
        summary_stats = summary_stats_generator.get_summary_stats()
        summary_stats_generator.print_summary_stats(summary_stats)
        detailed_stats_generator.print_detailed_stats(detailed_stats)

    
