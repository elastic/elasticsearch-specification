class AnomalyRecord {
	job_id: string;
	result_type: string;
	probability: double;
	record_score: double;
	initial_record_score: double;
	bucket_span: Time;
	detector_index: integer;
	is_interim: boolean;
	@prop_serializer("EpochMillisecondsDateTimeJsonConverter")
	timestamp: Date;
	function: string;
	function_description: string;
	typical: double[];
	actual: double[];
	field_name: string;
	by_field_name: string;
	by_field_value: string;
	causes: AnomalyCause[];
	influencers: Influence[];
	over_field_name: string;
	over_field_value: string;
	partition_field_name: string;
	partition_field_value: string;
}
