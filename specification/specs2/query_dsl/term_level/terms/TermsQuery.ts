@class_serializer("TermsQueryJsonConverter")
class TermsQuery {
	terms: any[];
	terms_lookup: FieldLookup;
}
