
/**namespace:Indices.IndexSettings.IndexTemplates.GetIndexTemplate */
/**custom_serialization*/
interface get_index_template_response extends response {
	TemplateMappings: map<string, template_mapping>[];
}