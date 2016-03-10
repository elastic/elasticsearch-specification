
/**namespace:Mapping.Types */
interface Property {
	Name: PropertyName;
	type: TypeName;
	index_name: string;
	store: boolean;
	doc_values: boolean;
	fields: Map<PropertyName, Property>;
	similarity: SimilarityOption;
	copy_to: Field[];
}