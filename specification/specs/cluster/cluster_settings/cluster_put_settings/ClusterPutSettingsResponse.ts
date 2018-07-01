class ClusterPutSettingsResponse extends ResponseBase {
	acknowledged: boolean;
	persistent: Map<string, any>;
	transient: Map<string, any>;
}
