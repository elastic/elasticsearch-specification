class AnomalyRecord {
	actual: double[];
	bucket_span: Time;
	by_field_name: string;
	by_field_value: string;
	causes: AnomalyCause[];
	detector_index: integer;
	field_name: string;
	function: string;
	function_description: string;
	influencers: Influence[];
	initial_record_score: double;
	is_interim: boolean;
	job_id: string;
	over_field_name: string;
	over_field_value: string;
	partition_field_name: string;
	partition_field_value: string;
	probability: double;
	record_score: double;
	result_type: string;
	@prop_serializer("DateTimeOffsetEpochMillisecondsFormatter")
	timestamp: Date;
	typical: double[];
}
