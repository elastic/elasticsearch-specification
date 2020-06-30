class RootNodeInfoResponse extends ResponseBase implements IResponse {
	cluster_name: string;
	cluster_uuid: string;
	name: string;
	tagline: string;
	version: ElasticsearchVersionInfo;
}
