@class_serializer("RangeQueryFormatter")
class RangeQuery {
  gt: double | DateMath;
  gte: double | DateMath;
  lt: double | DateMath;
  lte: double | DateMath;
  relation: RangeRelation;
  boost: float;
  time_zone: string;
}
