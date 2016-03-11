
/**namespace:Indices.AliasManagement.GetAliases */
interface get_aliases_response extends response {
	Indices: map<string, alias_definition[]>[];
}