@class_serializer("TermsQueryFormatter")
class TermsQuery {
	terms: string[];
	terms_lookup: FieldLookup;
  boost: float;
}
