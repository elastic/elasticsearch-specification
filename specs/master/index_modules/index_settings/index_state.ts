
/**namespace:IndexModules.IndexSettings */
/**custom_serialization*/
interface IndexState {
	settings: Map<string, any>;
	aliases: Map<IndexName, Alias>;
	warmers: Map<TypeName, Warmer>;
	mappings: Map<TypeName, TypeMapping>;
	similarity: Map<string, Similarity>;
}