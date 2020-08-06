@class_serializer("SourceFilterFormatter")
class SourceFilter {
	excludes: Union<Field, Field[]>;
	includes: Union<Field, Field[]>;
}
