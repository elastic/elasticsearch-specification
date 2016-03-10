
/**namespace:QueryDsl.Geo.HashCell */
/**custom_serialization*/
interface GeoHashCellQuery {
	Location: GeoLocation;
	precision: Union<integer, Distance>;
	neighbors: boolean;
}