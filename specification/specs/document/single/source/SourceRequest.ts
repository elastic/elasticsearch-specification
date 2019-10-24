@rest_spec_name("get_source")
class SourceRequest extends RequestBase {
	@request_parameter()
	preference: string;
	@request_parameter()
	realtime: boolean;
	@request_parameter()
	refresh: boolean;
	@request_parameter()
	routing: Routing;
	@request_parameter()
	source_enabled: boolean;
	@request_parameter()
	source_excludes: Field[];
	@request_parameter()
	source_includes: Field[];
	@request_parameter()
	version: long;
	@request_parameter()
	version_type: VersionType;
}
