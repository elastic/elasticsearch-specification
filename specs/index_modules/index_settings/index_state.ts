
/**namespace:IndexModules.IndexSettings */
/**custom_serialization*/
interface index_state {
	settings: map<string, any>[];
	aliases: map<index_name, alias>[];
	warmers: map<type_name, warmer>[];
	mappings: map<type_name, type_mapping>[];
	similarity: map<string, similarity>[];
}