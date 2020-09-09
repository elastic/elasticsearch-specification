class SynonymGraphTokenFilter extends TokenFilterBase {
  /** @prop_serializer NullableStringBooleanFormatter */
  expand: boolean;
  format: SynonymFormat;
  /** @prop_serializer NullableStringBooleanFormatter */
  lenient: boolean;
  synonyms: string[];
  synonyms_path: string;
  tokenizer: string;
  /** @prop_serializer NullableStringBooleanFormatter */
  updateable: boolean;
}
