
/**namespace:QueryDsl.Specialized.Script */
/**custom_serialization*/
interface ScriptQuery {
	inline: string;
	id: Id;
	file: string;
	/**custom_serialization */
	params: Map<string, any>;
	lang: string;
}