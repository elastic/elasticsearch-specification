
/**namespace:Search.Suggesters.Suggest */
/**custom_serialization*/
interface SuggestResponse extends Response {
	Shards: ShardsMetaData;
	Suggestions: Map<string, Suggest[]>;
}