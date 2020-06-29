@rest_spec_name("indices.delete_alias")
class DeleteAliasRequest extends RequestBase {
	query_parameters: {
		master_timeout: Time;
		timeout: Time;
	}
	body: {
	}
}
