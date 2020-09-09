@class_serializer("PercentilesAggregationFormatter")
class PercentilesAggregation {
  keyed: boolean;
  method: PercentilesMethod;
  percents: double[];
  field: Field;
  missing: Missing;
}
