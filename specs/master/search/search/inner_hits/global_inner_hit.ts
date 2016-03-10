
/**namespace:Search.Search.InnerHits */
/**custom_serialization*/
interface GlobalInnerHit {
	query: QueryContainer;
	inner_hits: Map<string, InnerHitsContainer>;
}