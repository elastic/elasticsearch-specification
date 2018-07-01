class AnomalyCause {
	probability: double;
	over_field_name: string;
	over_field_value: string;
	by_field_name: string;
	by_field_value: string;
	correlated_by_field_value: string;
	partition_field_name: string;
	partition_field_value: string;
	function: string;
	function_description: string;
	typical: double[];
	actual: double[];
	influencers: Influence[];
	field_name: string;
}
