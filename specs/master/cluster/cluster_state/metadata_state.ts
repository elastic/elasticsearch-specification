
/**namespace:Cluster.ClusterState */
interface metadata_state {
	/**custom_serialization */
	templates: map<string, template_mapping>[];
	cluster_uuid: string;
	/**custom_serialization */
	indices: map<string, metadata_index_state>[];
}