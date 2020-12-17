class NestedSortValue {
  filter: QueryContainer;
  max_children: integer;
  path: Field;
}

class NestedSort {
  nested: NestedSortValue
}

// type NestedSort = Dictionary<Field, NestedSortKey>


