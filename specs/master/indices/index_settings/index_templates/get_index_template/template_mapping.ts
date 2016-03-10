
/**namespace:Indices.IndexSettings.IndexTemplates.GetIndexTemplate */
interface TemplateMapping {
	template: string;
	order: integer;
	settings: Map<string, any>;
	mappings: Map<TypeName, TypeMapping>;
	warmers: Map<TypeName, Warmer>;
	aliases: Map<IndexName, Alias>;
}