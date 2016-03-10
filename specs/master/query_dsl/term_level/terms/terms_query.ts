
/**namespace:QueryDsl.TermLevel.Terms */
/**custom_serialization*/
interface TermsQuery {
	MinimumShouldMatch: MinimumShouldMatch;
	DisableCoord: boolean;
	Terms: any[];
	TermsLookup: FieldLookup;
}