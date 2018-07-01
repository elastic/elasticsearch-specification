@class_serializer("TermsIncludeJsonConverter")
class TermsInclude {
	pattern: string;
	values: string[];
	partition: long;
	num_partitions: long;
}
