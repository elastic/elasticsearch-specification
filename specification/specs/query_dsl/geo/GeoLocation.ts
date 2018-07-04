@class_serializer("UnionJsonConverter")
class Indices extends String {}
class IndexName extends String {}
class Field extends String {}
class TypeName extends String {}
class PropertyName extends String {}
@class_serializer("UnionJsonConverter")
class Types extends String {}
@class_serializer("IdJsonConverter")
class Id extends String {}
@class_serializer("RoutingJsonConverter")
class Routing extends String {}
class RelationName extends String {}
class GeoLocation {
	lat: double;
	lon: double;
}
