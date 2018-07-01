class CorePropertyBase extends PropertyBase {
	copy_to: Field[];
	fields: Map<PropertyName, Property>;
	similarity: Union<SimilarityOption, string>;
	store: boolean;
}
