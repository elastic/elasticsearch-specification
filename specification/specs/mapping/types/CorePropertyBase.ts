class CorePropertyBase extends PropertyBase {
	copy_to: Field[];
	fields: Dictionary<PropertyName, IProperty>;
	similarity: Union<SimilarityOption, string>;
	store: boolean;
}
