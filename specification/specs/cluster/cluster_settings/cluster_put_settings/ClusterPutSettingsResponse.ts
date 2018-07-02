class ClusterPutSettingsResponse extends ResponseBase {
	acknowledged: boolean;
	persistent: Dictionary<string, any>[];
	transient: Dictionary<string, any>[];
}
