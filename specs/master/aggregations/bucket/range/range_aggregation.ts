
/**namespace:Aggregations.Bucket.Range */
interface RangeAggregation {
	field: Field;
	script: Script;
	ranges: Range[];
}