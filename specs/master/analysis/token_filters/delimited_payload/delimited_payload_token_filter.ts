
/**namespace:Analysis.TokenFilters.DelimitedPayload */
interface delimited_payload_token_filter extends token_filter_base {
	delimiter: string;
	encoding: DelimitedPayloadEncoding;
}