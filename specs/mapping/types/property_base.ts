
/**namespace:Mapping.Types */
interface property_base {
	Name: property_name;
	Type: type_name;
	CopyTo: field[];
	DocValues: boolean;
	Fields: map<property_name, property>[];
	IndexName: string;
	Similarity: SimilarityOption;
	Store: boolean;
}