
/**namespace:Cluster.ClusterState */
interface MetadataState {
	/**custom_serialization */
	templates: Map<string, TemplateMapping>;
	cluster_uuid: string;
	/**custom_serialization */
	indices: Map<string, MetadataIndexState>;
}