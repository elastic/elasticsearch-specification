
/**namespace:Indices.Warmers.GetWarmer */
/**custom_serialization*/
interface get_warmer_response extends response {
	/**custom_serialization */
	Indices: map<string, map<type_name, warmer>[]>[];
}