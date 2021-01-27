@class_serializer('SortFormatter')
class Sort {
  missing?: Missing
  mode?: SortMode
  nested?: NestedSort
  numeric_type?: NumericType
  unmapped_type?: string
  order: SortOrder
}
