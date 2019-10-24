class RootNodeInfoResponse extends ResponseBase implements IResponse {
	name: string;
	cluster_name: string;
	cluster_u_u_i_d: string;
	version: ElasticsearchVersionInfo;
	tagline: string;
}
