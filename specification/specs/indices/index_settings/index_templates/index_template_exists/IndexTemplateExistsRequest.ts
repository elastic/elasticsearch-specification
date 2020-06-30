@rest_spec_name("indices.exists_template")
class IndexTemplateExistsRequest extends RequestBase {
	query_parameters: {
		flat_settings: boolean;
		local: boolean;
		master_timeout: Time;
	}
	body: {
	}
}
