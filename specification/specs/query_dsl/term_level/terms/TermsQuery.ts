@class_serializer("TermsQueryFormatter")
class TermsQuery extends QueryBase {
	terms: string[];
	terms_lookup: FieldLookup;
}
