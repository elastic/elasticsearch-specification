@class_serializer("ScriptQueryConverter")
class ScriptQuery {
	source: string;
	inline: string;
	id: Id;
	params: Dictionary<string, any>[];
	lang: string;
}
