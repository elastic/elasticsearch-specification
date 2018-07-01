class FiltersAggregation {
	filters: Union<Map<string, QueryContainer>, QueryContainer[]>;
	other_bucket: boolean;
	other_bucket_key: string;
}
