
/**namespace:Document.Multiple.DeleteByQuery */
interface DeleteByQueryResponse extends Response {
	/**custom_serialization */
	_indices: Map<string, DeleteByQueryIndicesResult>;
	took: long;
	timed_out: boolean;
}