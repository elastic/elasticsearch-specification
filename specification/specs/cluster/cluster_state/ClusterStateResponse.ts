@class_serializer("DynamicResponseFormatter`1")
class ClusterStateResponse extends ResponseBase {
  cluster_name: string;
  cluster_uuid: string;
  master_node: string;
  state: string[];
  state_uuid: string;
  version: long;
}
