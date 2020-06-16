@class_serializer("ArrayCompareConditionFormatter")
class ArrayCompareCondition {
	array_path: string;
	comparison: string;
	path: string;
	quantifier: Quantifier;
	value: any;
}
