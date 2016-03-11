
/**namespace:QueryDsl.Geo.HashCell */
/**custom_serialization*/
interface geo_hash_cell_query {
	Location: geo_location;
	precision: union<integer, distance>;
	neighbors: boolean;
}