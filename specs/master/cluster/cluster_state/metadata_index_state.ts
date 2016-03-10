
/**namespace:Cluster.ClusterState */
interface MetadataIndexState {
	state: string;
	/**custom_serialization */
	settings: string[];
	mappings: Map<TypeName, TypeMapping>;
	aliases: string[];
}