
/**namespace:Search.Explain */
interface explain_response<t> extends response {
	matched: boolean;
	explanation: explanation_detail;
	get: instant_get<t>;
}