
/**namespace:Search.Explain */
interface ExplainResponse<T> extends Response {
	matched: boolean;
	explanation: ExplanationDetail;
	get: InstantGet<T>;
}