class CorePropertyBase extends PropertyBase {
  copy_to: Field[];
  fields: Dictionary<PropertyName, PropertyBase>;
  similarity: string;
  store: boolean;
}
