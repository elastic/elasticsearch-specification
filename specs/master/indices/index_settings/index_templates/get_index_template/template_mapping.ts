
/**namespace:Indices.IndexSettings.IndexTemplates.GetIndexTemplate */
interface template_mapping {
	template: string;
	order: integer;
	settings: map<string, any>[];
	mappings: map<type_name, type_mapping>[];
	warmers: map<type_name, warmer>[];
	aliases: map<index_name, alias>[];
}