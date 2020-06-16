@class_serializer("DetectorFormatter")
class Detector {
	custom_rules: DetectionRule[];
	detector_description: string;
	detector_index: integer;
	exclude_frequent: ExcludeFrequent;
	function: string;
	use_null: boolean;
}
