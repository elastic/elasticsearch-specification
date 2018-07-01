@class_serializer("ArrayCompareConditionConverter")
class ArrayCompareCondition {
	array_path: string;
	path: string;
	comparison: string;
	value: any;
	quantifier: Quantifier;
}
