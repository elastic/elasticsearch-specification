
/**namespace:Cluster.RootNodeInfo */
interface RootNodeInfoResponse extends Response {
	name: string;
	tagline: string;
	version: ElasticsearchVersionInfo;
}