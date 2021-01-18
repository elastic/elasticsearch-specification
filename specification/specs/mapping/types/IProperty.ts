interface IProperty {
  local_metadata?: Dictionary<string, UserDefinedValue>;
  meta?: Dictionary<string, string>;
  name?: PropertyName;
  type: string;
  properties?: Dictionary<PropertyName, IProperty>;
}
