class TemplateMapping {
	index_patterns: string[];
	order: integer;
	settings: Map<string, any>;
	mappings: Map<TypeName, TypeMapping>;
	aliases: Map<IndexName, Alias>;
	version: integer;
}
