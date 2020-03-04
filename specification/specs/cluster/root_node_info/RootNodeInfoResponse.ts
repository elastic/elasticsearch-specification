class RootNodeInfoResponse extends ResponseBase implements IResponse {
	name: string;
	cluster_name: string;
	cluster_uuid: string;
	version: ElasticsearchVersionInfo;
	tagline: string;
}
