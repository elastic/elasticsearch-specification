class DeprecationInfoResponse extends ResponseBase {
	cluster_settings: DeprecationInfo[];
	node_settings: DeprecationInfo[];
	index_settings: Map<string, DeprecationInfo[]>;
}
