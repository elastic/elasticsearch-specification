class ExplainResponse<TDocument> extends ResponseBase {
	explanation: ExplanationDetail;
	get: InlineGet<TDocument>;
	matched: boolean;
}
