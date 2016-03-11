
/**namespace:Aggregations.Bucket.Filters */
interface filters_aggregation {
	filters: union<map<string, query_container>[], query_container[]>;
	other_bucket: boolean;
	other_bucket_key: string;
}