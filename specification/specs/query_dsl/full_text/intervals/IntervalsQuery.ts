@class_serializer("FieldNameQueryFormatter`2")
class IntervalsQuery extends QueryBase {
  all_of: IntervalsAllOf;
  any_of: IntervalsAnyOf;
  fuzzy: IntervalsFuzzy;
  match: IntervalsMatch;
  prefix: IntervalsPrefix;
  wildcard: IntervalsWildcard;
}
