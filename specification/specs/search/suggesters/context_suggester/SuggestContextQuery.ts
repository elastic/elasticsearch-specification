class SuggestContextQuery {
	context: Context;
	boost: double;
	prefix: boolean;
	precision: Union<Distance, integer>;
	neighbours: Union<Distance[], integer[]>;
}
