class InnerHits {
  name?: string
  size?: integer
  from?: integer
  collapse?: FieldCollapse
  docvalue_fields?: Field[]
  explain?: boolean
  highlight?: Highlight
  ignore_unmapped?: boolean
  script_fields?: Dictionary<string, ScriptField>
  seq_no_primary_term?: boolean
  fields?: Field[]
  sort?: Array<SingleKeyDictionary<Union<Sort, SortOrder>>>
  _source?: Union<boolean, SourceFilter>
  version?: boolean
}
