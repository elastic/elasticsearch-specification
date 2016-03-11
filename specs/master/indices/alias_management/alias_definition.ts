
/**namespace:Indices.AliasManagement */
interface alias_definition {
	Name: string;
	filter: query_container;
	routing: string;
	index_routing: string;
	search_routing: string;
}