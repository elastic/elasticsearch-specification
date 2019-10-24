class DeprecationInfoResponse extends ResponseBase implements IResponse {
	cluster_settings: DeprecationInfo[];
	index_settings: Dictionary<string, DeprecationInfo[]>;
	node_settings: DeprecationInfo[];
}
