class TemplateMapping {
	index_patterns: string[];
	order: integer;
	settings: Dictionary<string, any>;
	mappings: Dictionary<TypeName, TypeMapping>;
	aliases: Dictionary<IndexName, Alias>;
	version: integer;
}
