@class_serializer("FuzzyQueryJsonConverter")
class FuzzyQuery {
	prefix_length: integer;
	rewrite: MultiTermQueryRewrite;
	max_expansions: integer;
	transpositions: boolean;
}
