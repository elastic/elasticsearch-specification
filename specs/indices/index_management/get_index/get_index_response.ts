
/**namespace:Indices.IndexManagement.GetIndex */
interface get_index_response extends response {
	Indices: map<string, index_state>[];
}