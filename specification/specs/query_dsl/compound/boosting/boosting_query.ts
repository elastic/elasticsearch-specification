
/**namespace:QueryDsl.Compound.Boosting */
/**custom_serialization*/
interface boosting_query {
	positive: query_container;
	negative: query_container;
	negative_boost: double;
}