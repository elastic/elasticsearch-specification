class CatTemplatesRecord {
  index_patterns: string;
  name: string;
  /** @prop_serializer StringLongFormatter */
  order: long;
  /** @prop_serializer NullableStringLongFormatter */
  version: long;
}
