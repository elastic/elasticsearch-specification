@class_serializer("MultiTermQueryRewriteConverter")
class MultiTermQueryRewrite {
	rewrite: RewriteMultiTerm;
	size: integer;
	constant_score: MultiTermQueryRewrite;
	scoring_boolean: MultiTermQueryRewrite;
	constant_score_boolean: MultiTermQueryRewrite;
}
