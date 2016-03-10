
/**namespace:Aggregations.Bucket.Histogram */
/**custom_serialization*/
interface HistogramOrder {
	Key: string;
	Order: SortOrder;
	CountAscending: HistogramOrder;
	CountDescending: HistogramOrder;
	KeyAscending: HistogramOrder;
	KeyDescending: HistogramOrder;
}