@class_serializer("MultiTermQueryRewriteFormatter")
class MultiTermQueryRewrite {
	constant_score: MultiTermQueryRewrite;
	constant_score_boolean: MultiTermQueryRewrite;
	rewrite: RewriteMultiTerm;
	scoring_boolean: MultiTermQueryRewrite;
	size: integer;
}
