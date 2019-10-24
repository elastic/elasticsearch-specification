@rest_spec_name("security.clear_cached_realms")
class ClearCachedRealmsRequest extends RequestBase {
	@request_parameter()
	usernames: string[];
}
