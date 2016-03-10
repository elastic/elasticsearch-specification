
/**namespace:Aggregations.Bucket.GeoHashGrid */
interface GeoHashGridAggregation {
	field: Field;
	size: integer;
	shard_size: integer;
	precision: GeoHashPrecision;
}