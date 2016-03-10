
/**namespace:Search.Explain */
interface InstantGet<T> {
	found: boolean;
	_source: T;
	fields: Map<string, any>;
}