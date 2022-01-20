# Type Specification Report

- [Compact namespace import graph](https://elastic.github.io/elasticsearch-specification/namespace-dependencies-compact.html)
- [Expanded namespace import graph](https://elastic.github.io/elasticsearch-specification/namespace-dependencies-expanded.html)
- [Most used namespaces](#most-used-namespaces)
- [Most greedy namespaces](#most-greedy-namespaces)
- [Top 50 used types](#top-50-used-types)
- [Top 50 greedy types](#top-50-greedy-types)


## Most used namespaces
| Namespace | Occurencies |
| --- | --- |
| `_types` | 78 |
| `search` | 18 |
| `indices` | 6 |
| `watcher` | 4 |
| `ml` | 3 |
| `tasks` | 3 |
| `explain` | 2 |
| `msearch` | 2 |
| `reindex` | 2 |
| `termvectors` | 2 |
| `_spec_utils` | 2 |
| `cluster` | 2 |
| `ilm` | 2 |
| `ingest` | 2 |
| `license` | 2 |
| `nodes` | 2 |
| `slm` | 2 |
| `bulk` | 1 |
| `field_caps` | 1 |
| `get` | 1 |
| `get_script_context` | 1 |
| `get_script_languages` | 1 |
| `knn_search` | 1 |
| `mget` | 1 |
| `msearch_template` | 1 |
| `mtermvectors` | 1 |
| `rank_eval` | 1 |
| `reindex_rethrottle` | 1 |
| `scripts_painless_execute` | 1 |
| `search_mvt` | 1 |
| `search_shards` | 1 |
| `update_by_query_rethrottle` | 1 |
| `async_search` | 1 |
| `autoscaling` | 1 |
| `cat` | 1 |
| `ccr` | 1 |
| `dangling_indices` | 1 |
| `enrich` | 1 |
| `eql` | 1 |
| `features` | 1 |
| `fleet` | 1 |
| `graph` | 1 |
| `logstash` | 1 |
| `migration` | 1 |
| `rollup` | 1 |
| `searchable_snapshots` | 1 |
| `security` | 1 |
| `shutdown` | 1 |
| `snapshot` | 1 |
| `sql` | 1 |
| `text_structure` | 1 |
| `transform` | 1 |
| `xpack` | 1 |

[Back to top](#type-specification-report)


## Most greedy namespaces
| Namespace | Occurencies |
| --- | --- |
| `xpack` | 6 |
| `_types` | 5 |
| `cluster` | 4 |
| `mget` | 4 |
| `update_by_query_rethrottle` | 4 |
| `search` | 3 |
| `explain` | 3 |
| `msearch` | 3 |
| `ilm` | 3 |
| `ingest` | 3 |
| `nodes` | 3 |
| `slm` | 3 |
| `bulk` | 3 |
| `msearch_template` | 3 |
| `mtermvectors` | 3 |
| `reindex_rethrottle` | 3 |
| `async_search` | 3 |
| `enrich` | 3 |
| `eql` | 3 |
| `text_structure` | 3 |
| `transform` | 3 |
| `indices` | 2 |
| `watcher` | 2 |
| `ml` | 2 |
| `tasks` | 2 |
| `reindex` | 2 |
| `termvectors` | 2 |
| `license` | 2 |
| `field_caps` | 2 |
| `get` | 2 |
| `get_script_context` | 2 |
| `get_script_languages` | 2 |
| `knn_search` | 2 |
| `rank_eval` | 2 |
| `scripts_painless_execute` | 2 |
| `search_shards` | 2 |
| `autoscaling` | 2 |
| `ccr` | 2 |
| `dangling_indices` | 2 |
| `graph` | 2 |
| `logstash` | 2 |
| `migration` | 2 |
| `rollup` | 2 |
| `searchable_snapshots` | 2 |
| `security` | 2 |
| `shutdown` | 2 |
| `snapshot` | 2 |
| `sql` | 2 |
| `_spec_utils` | 1 |
| `search_mvt` | 1 |
| `cat` | 1 |
| `fleet` | 1 |
| `features` | 0 |

[Back to top](#type-specification-report)


## Top 50 used types
| Type | Occurencies | Location |
| --- | --- | --- |
| `_types.RequestBase` | 358 | [`_types/Base.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/Base.ts#L34-L34) |
| `_types.integer` | 339 | [`_types/Numeric.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/Numeric.ts#L22-L22) |
| `_types.long` | 283 | [`_types/Numeric.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/Numeric.ts#L24-L24) |
| `_types.Id` | 234 | [`_types/common.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/common.ts#L48-L48) |
| `_types.Time` | 182 | [`_types/Time.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/Time.ts#L62-L68) |
| `_types.Name` | 173 | [`_types/common.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/common.ts#L65-L65) |
| `_types.double` | 144 | [`_types/Numeric.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/Numeric.ts#L27-L27) |
| `_types.Field` | 135 | [`_types/common.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/common.ts#L111-L112) |
| `_types.IndexName` | 113 | [`_types/common.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/common.ts#L53-L53) |
| `_types.AcknowledgedResponseBase` | 90 | [`_types/Base.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/Base.ts#L47-L50) |
| `_types.Indices` | 77 | [`_types/common.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/common.ts#L54-L54) |
| `_types.query_dsl.QueryContainer` | 60 | [`_types/query_dsl/abstractions.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/query_dsl/abstractions.ts#L97-L163) |
| `_types.query_dsl.QueryBase` | 55 | [`_types/query_dsl/abstractions.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/query_dsl/abstractions.ts#L176-L180) |
| `_types.DateString` | 48 | [`_types/Time.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/Time.ts#L27-L27) |
| `_types.ExpandWildcards` | 48 | [`_types/common.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/common.ts#L190-L190) |
| `_types.VersionNumber` | 48 | [`_types/common.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/common.ts#L87-L87) |
| `_types.VersionString` | 46 | [`_types/common.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/common.ts#L89-L89) |
| `_types.analysis.TokenFilterBase` | 46 | [`_types/analysis/token_filters.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/analysis/token_filters.ts#L39-L41) |
| `_types.Fields` | 39 | [`_types/common.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/common.ts#L113-L113) |
| `_types.Routing` | 36 | [`_types/common.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/common.ts#L59-L59) |
| `_types.EpochMillis` | 35 | [`_types/Time.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/Time.ts#L30-L30) |
| `_types.Metadata` | 33 | [`_types/common.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/common.ts#L84-L84) |
| `ingest._types.ProcessorBase` | 33 | [`ingest/_types/Processors.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/ingest/_types/Processors.ts#L68-L73) |
| `_types.Names` | 29 | [`_types/common.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/common.ts#L66-L66) |
| `_types.Script` | 29 | [`_types/Scripting.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/Scripting.ts#L56-L57) |
| `_types.ByteSize` | 27 | [`_types/common.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/common.ts#L81-L82) |
| `_types.aggregations.BucketAggregationBase` | 25 | [`_types/aggregations/bucket.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/aggregations/bucket.ts#L40-L45) |
| `cat._types.CatRequestBase` | 25 | [`cat/_types/CatBase.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/cat/_types/CatBase.ts#L28-L30) |
| `_types.float` | 24 | [`_types/Numeric.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/Numeric.ts#L26-L26) |
| `_types.DictionaryResponseBase` | 21 | [`_types/Base.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/Base.ts#L52-L52) |
| `_types.ShardStatistics` | 21 | [`_types/Stats.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/Stats.ts#L32-L38) |
| `_types.ErrorCause` | 19 | [`_types/Errors.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/Errors.ts#L25-L48) |
| `_types.Refresh` | 19 | [`_types/common.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/common.ts#L234-L238) |
| `_types.aggregations.MultiBucketAggregateBase` | 19 | [`_types/aggregations/Aggregate.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/aggregations/Aggregate.ts#L313-L315) |
| `_types.Username` | 18 | [`_types/common.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/common.ts#L167-L167) |
| `_types.aggregations.AggregateBase` | 18 | [`_types/aggregations/Aggregate.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/aggregations/Aggregate.ts#L122-L124) |
| `_types.aggregations.PipelineAggregationBase` | 18 | [`_types/aggregations/pipeline.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/aggregations/pipeline.ts#L34-L37) |
| `_types.mapping.DocValuesPropertyBase` | 18 | [`_types/mapping/core.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/mapping/core.ts#L67-L69) |
| `xpack.usage.Base` | 18 | [`xpack/usage/types.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/xpack/usage/types.ts#L28-L31) |
| `_types.SequenceNumber` | 17 | [`_types/common.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/common.ts#L102-L102) |
| `_types.WaitForActiveShards` | 17 | [`_types/common.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/common.ts#L115-L116) |
| `_types.Ids` | 16 | [`_types/common.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/common.ts#L49-L49) |
| `_types.aggregations.MultiBucketBase` | 16 | [`_types/aggregations/Aggregate.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/aggregations/Aggregate.ts#L317-L324) |
| `_types.NodeId` | 15 | [`_types/common.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/common.ts#L50-L50) |
| `_types.VersionType` | 15 | [`_types/common.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/common.ts#L91-L96) |
| `_types.mapping.RuntimeFields` | 15 | [`_types/mapping/RuntimeFields.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/mapping/RuntimeFields.ts#L24-L24) |
| `_types.Uuid` | 14 | [`_types/common.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/common.ts#L99-L99) |
| `_types.analysis.TokenizerBase` | 14 | [`_types/analysis/tokenizers.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/analysis/tokenizers.ts#L26-L28) |
| `_types.query_dsl.Operator` | 13 | [`_types/query_dsl/Operator.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/query_dsl/Operator.ts#L22-L27) |
| `_types.Host` | 12 | [`_types/Networking.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/Networking.ts#L21-L21) |

[Back to top](#type-specification-report)


## Top 50 greedy types
| Type | Occurencies | Location |
| --- | --- | --- |
| `_types.aggregations.AggregationContainer` | 72 | [`_types/aggregations/AggregationContainer.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/aggregations/AggregationContainer.ts#L102-L203) |
| `_types.aggregations.Aggregate` | 66 | [`_types/aggregations/Aggregate.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/aggregations/Aggregate.ts#L30-L111) |
| `_types.query_dsl.QueryContainer` | 55 | [`_types/query_dsl/abstractions.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/query_dsl/abstractions.ts#L97-L163) |
| `_types.analysis.TokenFilterDefinition` | 48 | [`_types/analysis/token_filters.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/analysis/token_filters.ts#L344-L394) |
| `ingest._types.ProcessorContainer` | 34 | [`ingest/_types/Processors.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/ingest/_types/Processors.ts#L28-L66) |
| `indices.stats.ShardStats` | 24 | [`indices/stats/types.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/indices/stats/types.ts#L174-L201) |
| `nodes._types.Stats` | 21 | [`nodes/_types/Stats.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/nodes/_types/Stats.ts#L29-L52) |
| `indices.stats.IndexStats` | 19 | [`indices/stats/types.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/indices/stats/types.ts#L49-L87) |
| `nodes.info.NodeInfo` | 19 | [`nodes/info/types.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/nodes/info/types.ts#L29-L65) |
| `_types.mapping.DocValuesProperty` | 18 | [`_types/mapping/core.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/mapping/core.ts#L71-L89) |
| `indices._types.IndexSettings` | 15 | [`indices/_types/IndexSettings.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/indices/_types/IndexSettings.ts#L37-L287) |
| `nodes.info.NodeInfoSettings` | 15 | [`nodes/info/types.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/nodes/info/types.ts#L67-L83) |
| `_types.analysis.Analyzer` | 14 | [`_types/analysis/analyzers.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/analysis/analyzers.ts#L113-L128) |
| `_types.analysis.TokenizerDefinition` | 14 | [`_types/analysis/tokenizers.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/analysis/tokenizers.ts#L123-L138) |
| `watcher._types.Action` | 13 | [`watcher/_types/Action.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/watcher/_types/Action.ts#L35-L51) |
| `_types.aggregations.SignificantTextAggregation` | 13 | [`_types/aggregations/bucket.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/aggregations/bucket.ts#L323-L340) |
| `ml._types.Job` | 13 | [`ml/_types/Job.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/ml/_types/Job.ts#L46-L70) |
| `_types.mapping.TypeMapping` | 12 | [`_types/mapping/TypeMapping.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/mapping/TypeMapping.ts#L34-L55) |
| `snapshot._types.SnapshotInfo` | 12 | [`snapshot/_types/SnapshotInfo.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/snapshot/_types/SnapshotInfo.ts#L35-L59) |
| `_types.aggregations.SignificantTermsAggregation` | 12 | [`_types/aggregations/bucket.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/aggregations/bucket.ts#L306-L321) |
| `cluster.stats.ClusterNodes` | 12 | [`cluster/stats/types.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/cluster/stats/types.ts#L193-L220) |
| `_types.mapping.Property` | 11 | [`_types/mapping/Property.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/mapping/Property.ts#L52-L64) |
| `_types.aggregations.TermsAggregation` | 11 | [`_types/aggregations/bucket.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/aggregations/bucket.ts#L342-L359) |
| `cluster.stats.ClusterIndices` | 11 | [`cluster/stats/types.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/cluster/stats/types.ts#L62-L93) |
| `transform.get_transform.TransformSummary` | 11 | [`transform/get_transform/types.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/transform/get_transform/types.ts#L31-L50) |
| `_types.query_dsl.SpanQuery` | 10 | [`_types/query_dsl/span.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/query_dsl/span.ts#L79-L91) |
| `ml._types.Datafeed` | 10 | [`ml/_types/Datafeed.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/ml/_types/Datafeed.ts#L30-L47) |
| `ml._types.DatafeedConfig` | 10 | [`ml/_types/Datafeed.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/ml/_types/Datafeed.ts#L49-L106) |
| `_global.search._types.Hit` | 10 | [`_global/search/_types/hits.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_global/search/_types/hits.ts#L40-L60) |
| `_types.query_dsl.MoreLikeThisQuery` | 10 | [`_types/query_dsl/specialized.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/query_dsl/specialized.ts#L62-L89) |
| `_types.query_dsl.MultiMatchQuery` | 10 | [`_types/query_dsl/fulltext.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/query_dsl/fulltext.ts#L191-L217) |
| `_types.query_dsl.QueryStringQuery` | 10 | [`_types/query_dsl/fulltext.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/query_dsl/fulltext.ts#L233-L269) |
| `ml._types.JobConfig` | 10 | [`ml/_types/Job.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/ml/_types/Job.ts#L72-L90) |
| `ml._types.TrainedModelConfig` | 10 | [`ml/_types/TrainedModel.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/ml/_types/TrainedModel.ts#L65-L97) |
| `watcher._types.ExecutionResultAction` | 10 | [`watcher/_types/Execution.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/watcher/_types/Execution.ts#L74-L86) |
| `_global.search._types.Highlight` | 9 | [`_global/search/_types/highlighting.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_global/search/_types/highlighting.ts#L31-L54) |
| `_global.search._types.InnerHits` | 9 | [`_global/search/_types/hits.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_global/search/_types/hits.ts#L102-L120) |
| `_types.aggregations.DateHistogramAggregation` | 9 | [`_types/aggregations/bucket.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/aggregations/bucket.ts#L89-L105) |
| `_global.search._types.HighlightField` | 9 | [`_global/search/_types/highlighting.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_global/search/_types/highlighting.ts#L82-L105) |
| `_types.mapping.NumberProperty` | 9 | [`_types/mapping/core.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/mapping/core.ts#L208-L217) |
| `_types.query_dsl.MatchQuery` | 9 | [`_types/query_dsl/fulltext.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/query_dsl/fulltext.ts#L133-L158) |
| `async_search._types.AsyncSearch` | 9 | [`async_search/_types/AsyncSearch.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/async_search/_types/AsyncSearch.ts#L30-L45) |
| `watcher.execute_watch.WatchRecord` | 9 | [`watcher/execute_watch/types.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/watcher/execute_watch/types.ts#L27-L39) |
| `watcher._types.Watch` | 8 | [`watcher/_types/Watch.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/watcher/_types/Watch.ts#L37-L47) |
| `_global.reindex.Source` | 8 | [`_global/reindex/types.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_global/reindex/types.ts#L46-L56) |
| `ccr._types.ShardStats` | 8 | [`ccr/_types/FollowIndexStats.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/ccr/_types/FollowIndexStats.ts#L35-L65) |
| `indices.recovery.RecoveryOrigin` | 8 | [`indices/recovery/types.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/indices/recovery/types.ts#L70-L83) |
| `indices.recovery.ShardRecovery` | 8 | [`indices/recovery/types.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/indices/recovery/types.ts#L110-L127) |
| `ml._types.DataframeAnalyticsSummary` | 8 | [`ml/_types/DataframeAnalytics.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/ml/_types/DataframeAnalytics.ts#L305-L317) |
| `xpack.usage.Security` | 8 | [`xpack/usage/types.ts`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/xpack/usage/types.ts#L418-L431) |

[Back to top](#type-specification-report)
