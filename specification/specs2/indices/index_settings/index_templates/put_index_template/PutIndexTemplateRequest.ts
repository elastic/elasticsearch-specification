@rest_spec_name("indices.put_template")
class PutIndexTemplateRequest extends RequestBase {
	index_patterns: string[];
	order: integer;
	version: integer;
	settings: Map<string, any>;
	mappings: Map<TypeName, TypeMapping>;
	aliases: Map<IndexName, Alias>;
	@request_parameter()
	create: boolean;
	@request_parameter()
	timeout: Time;
	@request_parameter()
	master_timeout: Time;
	@request_parameter()
	flat_settings: boolean;
}
