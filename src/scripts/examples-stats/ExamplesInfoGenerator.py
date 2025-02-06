from typing import List
from dataclasses import dataclass   
from EndpointPathsFinder import EndpointPathsFinder
from EndpointInfoGenerator import EndpointInfo, EndpointInfoGenerator
from ExamplesStatsGenerator import ExampleStats, ExamplesStatsGenerator

@dataclass
class ExamplesInfo:
    endpoints_info: List[EndpointInfo]
    stats: ExampleStats

class ExamplesInfoGenerator:
    def __init__(self):
        self.endpoint_paths_finder = EndpointPathsFinder()
        self.endpoint_info_processor = EndpointInfoGenerator()

    def get_examples_info(self) -> ExamplesInfo:
        endpoint_paths_finder = EndpointPathsFinder()
        endpoint_paths = endpoint_paths_finder.find_paths()
        endpoint_info_list = []
        stats = ExampleStats()
        for endpoint_path in endpoint_paths:
            stats.num_endpoints += 1
            endpoint_info = self.endpoint_info_processor.get_endpoint_info(endpoint_path)
            endpoint_info_list.append(endpoint_info)

        examples_stats_generator = ExamplesStatsGenerator(endpoint_info_list)   
        stats = examples_stats_generator.get_stats()

        examples_info = ExamplesInfo(endpoint_info_list, stats)
        return examples_info