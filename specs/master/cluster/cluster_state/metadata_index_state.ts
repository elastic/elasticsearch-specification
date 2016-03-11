
/**namespace:Cluster.ClusterState */
interface metadata_index_state {
	state: string;
	/**custom_serialization */
	settings: string[];
	mappings: map<type_name, type_mapping>[];
	aliases: string[];
}