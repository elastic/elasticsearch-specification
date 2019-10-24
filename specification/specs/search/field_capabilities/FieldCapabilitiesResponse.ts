class FieldCapabilitiesResponse extends ResponseBase implements IResponse {
	fields: Dictionary<Field, Dictionary<string, FieldCapabilities>>;
}
