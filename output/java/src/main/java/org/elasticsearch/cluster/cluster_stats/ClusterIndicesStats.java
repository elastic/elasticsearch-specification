
package org.elasticsearch.cluster.cluster_stats;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.Either;
import org.elasticsearch.XContentable;
import org.elasticsearch.NamedContainer;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_options.stats.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.cluster.cluster_stats.*;

public class ClusterIndicesStats  implements XContentable<ClusterIndicesStats> {
  
  static final ParseField COMPLETION = new ParseField("completion");
  private CompletionStats _completion;
  public CompletionStats getCompletion() { return this._completion; }
  public ClusterIndicesStats setCompletion(CompletionStats val) { this._completion = val; return this; }


  static final ParseField COUNT = new ParseField("count");
  private Long _count;
  public Long getCount() { return this._count; }
  public ClusterIndicesStats setCount(Long val) { this._count = val; return this; }


  static final ParseField DOCS = new ParseField("docs");
  private DocStats _docs;
  public DocStats getDocs() { return this._docs; }
  public ClusterIndicesStats setDocs(DocStats val) { this._docs = val; return this; }


  static final ParseField FIELDDATA = new ParseField("fielddata");
  private FielddataStats _fielddata;
  public FielddataStats getFielddata() { return this._fielddata; }
  public ClusterIndicesStats setFielddata(FielddataStats val) { this._fielddata = val; return this; }


  static final ParseField QUERY_CACHE = new ParseField("query_cache");
  private QueryCacheStats _queryCache;
  public QueryCacheStats getQueryCache() { return this._queryCache; }
  public ClusterIndicesStats setQueryCache(QueryCacheStats val) { this._queryCache = val; return this; }


  static final ParseField SEGMENTS = new ParseField("segments");
  private SegmentsStats _segments;
  public SegmentsStats getSegments() { return this._segments; }
  public ClusterIndicesStats setSegments(SegmentsStats val) { this._segments = val; return this; }


  static final ParseField SHARDS = new ParseField("shards");
  private ClusterIndicesShardsStats _shards;
  public ClusterIndicesShardsStats getShards() { return this._shards; }
  public ClusterIndicesStats setShards(ClusterIndicesShardsStats val) { this._shards = val; return this; }


  static final ParseField STORE = new ParseField("store");
  private StoreStats _store;
  public StoreStats getStore() { return this._store; }
  public ClusterIndicesStats setStore(StoreStats val) { this._store = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_completion != null) {
      builder.field(COMPLETION.getPreferredName());
      _completion.toXContent(builder, params);
    }
    if (_count != null) {
      builder.field(COUNT.getPreferredName(), _count);
    }
    if (_docs != null) {
      builder.field(DOCS.getPreferredName());
      _docs.toXContent(builder, params);
    }
    if (_fielddata != null) {
      builder.field(FIELDDATA.getPreferredName());
      _fielddata.toXContent(builder, params);
    }
    if (_queryCache != null) {
      builder.field(QUERY_CACHE.getPreferredName());
      _queryCache.toXContent(builder, params);
    }
    if (_segments != null) {
      builder.field(SEGMENTS.getPreferredName());
      _segments.toXContent(builder, params);
    }
    if (_shards != null) {
      builder.field(SHARDS.getPreferredName());
      _shards.toXContent(builder, params);
    }
    if (_store != null) {
      builder.field(STORE.getPreferredName());
      _store.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ClusterIndicesStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ClusterIndicesStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ClusterIndicesStats, Void> PARSER =
    new ObjectParser<>(ClusterIndicesStats.class.getName(), false, ClusterIndicesStats::new);

  static {
    PARSER.declareObject(ClusterIndicesStats::setCompletion, (p, t) -> CompletionStats.PARSER.apply(p, t), COMPLETION);
    PARSER.declareLong(ClusterIndicesStats::setCount, COUNT);
    PARSER.declareObject(ClusterIndicesStats::setDocs, (p, t) -> DocStats.PARSER.apply(p, t), DOCS);
    PARSER.declareObject(ClusterIndicesStats::setFielddata, (p, t) -> FielddataStats.PARSER.apply(p, t), FIELDDATA);
    PARSER.declareObject(ClusterIndicesStats::setQueryCache, (p, t) -> QueryCacheStats.PARSER.apply(p, t), QUERY_CACHE);
    PARSER.declareObject(ClusterIndicesStats::setSegments, (p, t) -> SegmentsStats.PARSER.apply(p, t), SEGMENTS);
    PARSER.declareObject(ClusterIndicesStats::setShards, (p, t) -> ClusterIndicesShardsStats.PARSER.apply(p, t), SHARDS);
    PARSER.declareObject(ClusterIndicesStats::setStore, (p, t) -> StoreStats.PARSER.apply(p, t), STORE);
  }

}
