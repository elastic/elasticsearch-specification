class IndexMetrics extends String {}
@class_serializer("UnionJsonConverter")
class Context extends Union<string, GeoLocation> {
	category: string;
	geo: GeoLocation;
}
