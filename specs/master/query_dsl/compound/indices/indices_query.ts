
/**namespace:QueryDsl.Compound.Indices */
/**custom_serialization*/
interface IndicesQuery {
	/**custom_serialization */
	indices: Indices;
	query: QueryContainer;
	/**custom_serialization */
	no_match_query: QueryContainer;
}