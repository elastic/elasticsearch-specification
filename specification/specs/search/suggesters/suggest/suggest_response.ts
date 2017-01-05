
/**namespace:Search.Suggesters.Suggest */
/**custom_serialization*/
interface suggest_response extends response {
	Shards: shards_meta_data;
	Suggestions: map<string, suggest[]>[];
}