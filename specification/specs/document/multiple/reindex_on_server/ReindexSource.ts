class ReindexSource {
	index: Indices;
	query: QueryContainer;
	remote: RemoteSource;
	size: integer;
	slice: SlicedScroll;
	sort: Sort[];
	source: Field[];
}
