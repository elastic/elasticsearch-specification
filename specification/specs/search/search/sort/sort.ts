
/**namespace:Search.Search.Sort */
interface sort {
	SortKey: field;
	missing: string;
	order: SortOrder;
	mode: SortMode;
	nested_filter: query_container;
	nested_path: field;
}