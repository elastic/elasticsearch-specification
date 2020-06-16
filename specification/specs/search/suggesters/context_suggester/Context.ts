@class_serializer("ContextFormatter")
class Context extends Union<string, GeoLocation> {
	category: string;
	geo: GeoLocation;
}
