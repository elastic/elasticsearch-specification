
/**namespace:QueryDsl.Specialized.Script */
/**custom_serialization*/
interface script_query {
	inline: string;
	id: id;
	file: string;
	/**custom_serialization */
	params: map<string, any>[];
	lang: string;
}