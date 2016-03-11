
/**namespace:Aggregations.Bucket.DateRange */
interface date_range_aggregation {
	field: field;
	format: string;
	ranges: date_range_expression[];
}