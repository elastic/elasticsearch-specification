@rest_spec_name("indices.put_template")
class PutIndexTemplateRequest extends RequestBase {
	aliases: Dictionary<IndexName, Alias>;
	index_patterns: string[];
	mappings: TypeMapping;
	order: integer;
	settings: Dictionary<string, any>;
	version: integer;
	@request_parameter()
	create: boolean;
	@request_parameter()
	flat_settings: boolean;
	@request_parameter()
	include_type_name: boolean;
	@request_parameter()
	master_timeout: Time;
	@request_parameter()
	timeout: Time;
}
