@class_serializer("ScriptQueryConverter")
class ScriptQuery {
	source: string;
	inline: string;
	id: Id;
	params: Map<string, any>;
	lang: string;
}
