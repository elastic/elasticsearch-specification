class ObjectProperty extends CorePropertyBase {
	dynamic: Union<boolean, DynamicMapping>;
	enabled: boolean;
	properties: Map<PropertyName, Property>;
}
