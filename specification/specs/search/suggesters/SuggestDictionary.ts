@class_serializer("SuggestDictionaryFormatter`1")
class SuggestDictionary<T> {
	item: Suggest<T>[];
	keys: string[];
	values: Suggest<T>[][];
}
