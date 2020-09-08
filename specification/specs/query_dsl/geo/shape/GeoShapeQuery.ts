@class_serializer("CompositeFormatter`3")
class GeoShapeQuery extends QueryBase {
	ignore_unmapped: boolean;
	indexed_shape: FieldLookup;
	relation: GeoShapeRelation;
	shape: GeoShape;
}
