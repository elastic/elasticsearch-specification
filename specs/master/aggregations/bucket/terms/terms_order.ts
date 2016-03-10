
/**namespace:Aggregations.Bucket.Terms */
/**custom_serialization*/
interface TermsOrder {
	Key: string;
	Order: SortOrder;
	CountAscending: TermsOrder;
	CountDescending: TermsOrder;
	TermAscending: TermsOrder;
	TermDescending: TermsOrder;
}