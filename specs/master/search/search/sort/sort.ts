
/**namespace:Search.Search.Sort */
interface Sort {
	SortKey: Field;
	missing: string;
	order: SortOrder;
	mode: SortMode;
	nested_filter: QueryContainer;
	nested_path: Field;
}