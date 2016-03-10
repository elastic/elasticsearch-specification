
/**namespace:Aggregations.Bucket.DateRange */
interface DateRangeAggregation {
	field: Field;
	format: string;
	ranges: DateRangeExpression[];
}