
/**namespace:Aggregations.Bucket.Filters */
interface FiltersAggregation {
	filters: Union<Map<string, QueryContainer>, QueryContainer[]>;
	other_bucket: boolean;
	other_bucket_key: string;
}