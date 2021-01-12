class PercolateQuery extends QueryBase {
  /** @prop_serializer SourceFormatter`1 */
  document?: UserDefinedValue;
  /** @prop_serializer SourceFormatter`1 */
  documents?: UserDefinedValue[];
  field?: Field;
  id?: Id;
  index?: IndexName;
  preference?: string;
  routing?: Routing;
  version?: long;
}
