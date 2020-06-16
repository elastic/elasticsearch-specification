@class_serializer("FuzzyQueryFormatter")
class FuzzyQuery {
	max_expansions: integer;
	prefix_length: integer;
	rewrite: MultiTermQueryRewrite;
	transpositions: boolean;
}
