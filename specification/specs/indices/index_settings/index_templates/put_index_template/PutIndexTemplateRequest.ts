@rest_spec_name("indices.put_template")
class PutIndexTemplateRequest extends RequestBase {
	index_patterns: string[];
	order: integer;
	version: integer;
	settings: Dictionary<string, any>;
	mappings: Dictionary<TypeName, TypeMapping>;
	aliases: Dictionary<IndexName, Alias>;
	@request_parameter()
	create: boolean;
	@request_parameter()
	timeout: Time;
	@request_parameter()
	master_timeout: Time;
	@request_parameter()
	flat_settings: boolean;
}
