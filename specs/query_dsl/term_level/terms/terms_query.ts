
/**namespace:QueryDsl.TermLevel.Terms */
/**custom_serialization*/
interface terms_query {
	MinimumShouldMatch: minimum_should_match;
	DisableCoord: boolean;
	Terms: any[];
	TermsLookup: field_lookup;
}