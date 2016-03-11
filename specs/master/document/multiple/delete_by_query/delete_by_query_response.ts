
/**namespace:Document.Multiple.DeleteByQuery */
interface delete_by_query_response extends response {
	/**custom_serialization */
	_indices: map<string, delete_by_query_indices_result>[];
	took: long;
	timed_out: boolean;
}