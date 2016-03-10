
/**namespace:QueryDsl.Compound.Boosting */
/**custom_serialization*/
interface BoostingQuery {
	positive: QueryContainer;
	negative: QueryContainer;
	negative_boost: double;
}