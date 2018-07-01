class ExplainResponse<TDocument> extends ResponseBase {
	matched: boolean;
	explanation: ExplanationDetail;
	get: InstantGet<TDocument>;
}
