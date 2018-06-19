class SourceExistsRequest extends RequestBase {
	@request_parameter()
	parent: string;
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
	source_exclude: Field[];
	@request_parameter()
	source_include: Field[];
	@request_parameter()
	version: long;
	@request_parameter()
	version_type: VersionType;
}
