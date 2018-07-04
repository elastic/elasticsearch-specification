class FiltersAggregation {
	filters: Union<Dictionary<string, QueryContainer>, QueryContainer[]>;
	other_bucket: boolean;
	other_bucket_key: string;
}
