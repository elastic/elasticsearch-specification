class GenericProperty extends DocValuesPropertyBase {
  analyzer: string
  boost: double
  fielddata: StringFielddata
  ignore_above: integer
  index: boolean
  index_options: IndexOptions
  norms: boolean
  null_value: string
  position_increment_gap: integer
  search_analyzer: string
  term_vector: TermVectorOption
  type: string
}
