@class_serializer("FieldNameQueryFormatter`2")
class TermsSetQuery {
	minimum_should_match_field: Field;
	minimum_should_match_script: Script;
	@prop_serializer("SourceWriteFormatter`1")
	terms: any[];
}
