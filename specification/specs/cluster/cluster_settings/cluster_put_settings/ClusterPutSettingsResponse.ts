class ClusterPutSettingsResponse extends ResponseBase implements IResponse {
	acknowledged: boolean;
	persistent: Dictionary<string, any>;
	transient: Dictionary<string, any>;
}
