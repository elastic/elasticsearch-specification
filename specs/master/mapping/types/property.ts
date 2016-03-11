
/**namespace:Mapping.Types */
interface property {
	Name: property_name;
	type: type_name;
	index_name: string;
	store: boolean;
	doc_values: boolean;
	fields: map<property_name, property>[];
	similarity: SimilarityOption;
	copy_to: field[];
}