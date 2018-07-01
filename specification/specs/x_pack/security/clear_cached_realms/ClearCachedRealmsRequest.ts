@rest_spec_name("xpack.security.clear_cached_realms")
class ClearCachedRealmsRequest extends RequestBase {
	@request_parameter()
	usernames: string[];
}
