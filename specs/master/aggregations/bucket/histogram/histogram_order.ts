
/**namespace:Aggregations.Bucket.Histogram */
/**custom_serialization*/
interface histogram_order {
	Key: string;
	Order: SortOrder;
	CountAscending: histogram_order;
	CountDescending: histogram_order;
	KeyAscending: histogram_order;
	KeyDescending: histogram_order;
}