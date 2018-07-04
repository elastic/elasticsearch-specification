class ObjectProperty extends CorePropertyBase {
	dynamic: Union<boolean, DynamicMapping>;
	enabled: boolean;
	properties: Dictionary<PropertyName, IProperty>[];
}
