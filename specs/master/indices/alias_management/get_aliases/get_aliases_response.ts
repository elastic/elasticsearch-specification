
/**namespace:Indices.AliasManagement.GetAliases */
interface GetAliasesResponse extends Response {
	Indices: Map<string, AliasDefinition[]>;
}