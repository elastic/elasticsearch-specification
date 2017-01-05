
/**namespace:Aggregations.Bucket.Terms */
/**custom_serialization*/
interface terms_order {
	Key: string;
	Order: SortOrder;
	CountAscending: terms_order;
	CountDescending: terms_order;
	TermAscending: terms_order;
	TermDescending: terms_order;
}