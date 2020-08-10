class DeprecationInfoResponse extends ResponseBase {
	cluster_settings: DeprecationInfo[];
	index_settings: Dictionary<string, DeprecationInfo[]>;
	node_settings: DeprecationInfo[];
}
