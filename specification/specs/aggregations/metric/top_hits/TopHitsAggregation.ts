class TopHitsAggregation {
  docvalue_fields?: Field[]
  explain?: boolean
  from?: integer
  highlight?: Highlight
  script_fields?: Dictionary<string, ScriptField>
  size?: integer
  sort?:
    | string
    | Dictionary<Field, NestedSort>
    | Array<
        SingleKeyDictionary<Sort | SortOrder | Dictionary<Field, NestedSort>>
      >
  _source?: Union<boolean, SourceFilter>
  stored_fields?: Field[]
  track_scores?: boolean
  version?: boolean
  seq_no_primary_term?: boolean
}
