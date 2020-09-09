class SuggestContextQuery {
  boost: double;
  context: Context;
  neighbours: Union<Distance[], integer[]>;
  precision: Union<Distance, integer>;
  prefix: boolean;
}
