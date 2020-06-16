@class_serializer("DynamicResponseFormatter`1")
class ClusterStateResponse extends ResponseBase {
	state: string[];
	cluster_name: string;
	cluster_uuid: string;
	master_node: string;
	state_uuid: string;
	version: long;
}
