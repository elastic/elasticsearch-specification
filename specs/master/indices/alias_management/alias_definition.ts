
/**namespace:Indices.AliasManagement */
interface AliasDefinition {
	Name: string;
	filter: QueryContainer;
	routing: string;
	index_routing: string;
	search_routing: string;
}