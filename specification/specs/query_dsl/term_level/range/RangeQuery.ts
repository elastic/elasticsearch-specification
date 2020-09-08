@class_serializer("RangeQueryFormatter")
class RangeQuery extends QueryBase {
  gt: double | DateMath;
  gte: double | DateMath;
  lt: double | DateMath;
  lte: double | DateMath;
  relation: RangeRelation;
  time_zone: string;
}
