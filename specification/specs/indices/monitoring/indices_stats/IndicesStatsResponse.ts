/**
 * @type_stability stable
 */
class IndicesStatsResponse extends ResponseBase {
  /** @prop_serializer VerbatimInterfaceReadOnlyDictionaryKeysFormatter`2 */
  indices?: Dictionary<string, IndicesStats>;
  _shards: ShardStatistics;
  _all: IndicesStats;
}
