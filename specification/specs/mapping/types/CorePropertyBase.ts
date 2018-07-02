class CorePropertyBase extends PropertyBase {
	copy_to: Field[];
	fields: Dictionary<PropertyName, Property>[];
	similarity: Union<SimilarityOption, string>;
	store: boolean;
}
