class ObjectProperty extends CorePropertyBase {
  /** @prop_serializer DynamicMappingFormatter */
  dynamic: Union<boolean, DynamicMapping>;
  enabled: boolean;
  properties: Dictionary<PropertyName, PropertyBase>;
}
