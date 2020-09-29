
package org.elasticsearch.search.search;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.aggregations.*;
import org.elasticsearch.common_options.hit.*;
import org.elasticsearch.common_abstractions.lazy_document.*;
import org.elasticsearch.search.search.hits.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.search.search.profile.*;
import org.elasticsearch.search.suggesters.*;
import org.elasticsearch.common_abstractions.response.*;

public class SearchResponse<TDocument> extends ResponseBase<SearchResponse> implements XContentable<SearchResponse> {
  
  static final ParseField AGGREGATIONS = new ParseField("aggregations");
  private NamedContainer<String, Aggregate> _aggregations;
  public NamedContainer<String, Aggregate> getAggregations() { return this._aggregations; }
  public SearchResponse<TDocument> setAggregations(NamedContainer<String, Aggregate> val) { this._aggregations = val; return this; }

  static final ParseField CLUSTERS = new ParseField("_clusters");
  private ClusterStatistics _clusters;
  public ClusterStatistics getClusters() { return this._clusters; }
  public SearchResponse<TDocument> setClusters(ClusterStatistics val) { this._clusters = val; return this; }

  static final ParseField DOCUMENTS = new ParseField("documents");
  private List<TDocument> _documents;
  public List<TDocument> getDocuments() { return this._documents; }
  public SearchResponse<TDocument> setDocuments(List<TDocument> val) { this._documents = val; return this; }

  static final ParseField FIELDS = new ParseField("fields");
  private NamedContainer<String, LazyDocument> _fields;
  public NamedContainer<String, LazyDocument> getFields() { return this._fields; }
  public SearchResponse<TDocument> setFields(NamedContainer<String, LazyDocument> val) { this._fields = val; return this; }

  static final ParseField HITS = new ParseField("hits");
  private HitsMetadata<TDocument> _hits;
  public HitsMetadata<TDocument> getHits() { return this._hits; }
  public SearchResponse<TDocument> setHits(HitsMetadata<TDocument> val) { this._hits = val; return this; }

  static final ParseField MAX_SCORE = new ParseField("max_score");
  private double _maxScore;
  private boolean _maxScore$isSet;
  public double getMaxScore() { return this._maxScore; }
  public SearchResponse<TDocument> setMaxScore(double val) {
    this._maxScore = val;
    _maxScore$isSet = true;
    return this;
  }

  static final ParseField NUM_REDUCE_PHASES = new ParseField("num_reduce_phases");
  private long _numReducePhases;
  private boolean _numReducePhases$isSet;
  public long getNumReducePhases() { return this._numReducePhases; }
  public SearchResponse<TDocument> setNumReducePhases(long val) {
    this._numReducePhases = val;
    _numReducePhases$isSet = true;
    return this;
  }

  static final ParseField PROFILE = new ParseField("profile");
  private Profile _profile;
  public Profile getProfile() { return this._profile; }
  public SearchResponse<TDocument> setProfile(Profile val) { this._profile = val; return this; }

  static final ParseField SCROLL_ID = new ParseField("_scroll_id");
  private String _scrollId;
  public String getScrollId() { return this._scrollId; }
  public SearchResponse<TDocument> setScrollId(String val) { this._scrollId = val; return this; }

  static final ParseField SHARDS = new ParseField("_shards");
  private ShardStatistics _shards;
  public ShardStatistics getShards() { return this._shards; }
  public SearchResponse<TDocument> setShards(ShardStatistics val) { this._shards = val; return this; }

  static final ParseField SUGGEST = new ParseField("suggest");
  private SuggestDictionary<TDocument> _suggest;
  public SuggestDictionary<TDocument> getSuggest() { return this._suggest; }
  public SearchResponse<TDocument> setSuggest(SuggestDictionary<TDocument> val) { this._suggest = val; return this; }

  static final ParseField TERMINATED_EARLY = new ParseField("terminated_early");
  private Boolean _terminatedEarly;
  public Boolean getTerminatedEarly() { return this._terminatedEarly; }
  public SearchResponse<TDocument> setTerminatedEarly(Boolean val) { this._terminatedEarly = val; return this; }

  static final ParseField TIMED_OUT = new ParseField("timed_out");
  private Boolean _timedOut;
  public Boolean getTimedOut() { return this._timedOut; }
  public SearchResponse<TDocument> setTimedOut(Boolean val) { this._timedOut = val; return this; }

  static final ParseField TOOK = new ParseField("took");
  private long _took;
  private boolean _took$isSet;
  public long getTook() { return this._took; }
  public SearchResponse<TDocument> setTook(long val) {
    this._took = val;
    _took$isSet = true;
    return this;
  }

  static final ParseField TOTAL = new ParseField("total");
  private long _total;
  private boolean _total$isSet;
  public long getTotal() { return this._total; }
  public SearchResponse<TDocument> setTotal(long val) {
    this._total = val;
    _total$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_aggregations != null) {
      builder.field(AGGREGATIONS.getPreferredName());
      _aggregations.toXContent(builder, params);
    }
    if (_clusters != null) {
      builder.field(CLUSTERS.getPreferredName());
      _clusters.toXContent(builder, params);
    }
    if (_documents != null) {
      builder.array(DOCUMENTS.getPreferredName(), _documents);
    }
    if (_fields != null) {
      builder.field(FIELDS.getPreferredName());
      _fields.toXContent(builder, params);
    }
    if (_hits != null) {
      builder.field(HITS.getPreferredName());
      _hits.toXContent(builder, params);
    }
    if (_maxScore$isSet) {
      builder.field(MAX_SCORE.getPreferredName(), _maxScore);
    }
    if (_numReducePhases$isSet) {
      builder.field(NUM_REDUCE_PHASES.getPreferredName(), _numReducePhases);
    }
    if (_profile != null) {
      builder.field(PROFILE.getPreferredName());
      _profile.toXContent(builder, params);
    }
    if (_scrollId != null) {
      builder.field(SCROLL_ID.getPreferredName(), _scrollId);
    }
    if (_shards != null) {
      builder.field(SHARDS.getPreferredName());
      _shards.toXContent(builder, params);
    }
    if (_suggest != null) {
      builder.field(SUGGEST.getPreferredName());
      _suggest.toXContent(builder, params);
    }
    if (_terminatedEarly != null) {
      builder.field(TERMINATED_EARLY.getPreferredName(), _terminatedEarly);
    }
    if (_timedOut != null) {
      builder.field(TIMED_OUT.getPreferredName(), _timedOut);
    }
    if (_took$isSet) {
      builder.field(TOOK.getPreferredName(), _took);
    }
    if (_total$isSet) {
      builder.field(TOTAL.getPreferredName(), _total);
    }
  }

  @Override
  public SearchResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SearchResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SearchResponse, Void> PARSER =
    new ObjectParser<>(SearchResponse.class.getName(), false, SearchResponse::new);

  static {
    PARSER.declareObject(SearchResponse::setAggregations, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> Aggregate.PARSER.apply(pp, null)), AGGREGATIONS);
    PARSER.declareObject(SearchResponse::setClusters, (p, t) -> ClusterStatistics.PARSER.apply(p, t), CLUSTERS);
    PARSER.declareObjectArray(SearchResponse::setDocuments, (p, t) -> null /* TODO TDocument */, DOCUMENTS);
    PARSER.declareObject(SearchResponse::setFields, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> LazyDocument.PARSER.apply(pp, null)), FIELDS);
    HitsMetadata _hits = new HitsMetadata<>();
    PARSER.declareObject(SearchResponse::setHits, (p, t) -> _hits.PARSER.apply(p, t), HITS);
    PARSER.declareDouble(SearchResponse::setMaxScore, MAX_SCORE);
    PARSER.declareLong(SearchResponse::setNumReducePhases, NUM_REDUCE_PHASES);
    PARSER.declareObject(SearchResponse::setProfile, (p, t) -> Profile.PARSER.apply(p, t), PROFILE);
    PARSER.declareString(SearchResponse::setScrollId, SCROLL_ID);
    PARSER.declareObject(SearchResponse::setShards, (p, t) -> ShardStatistics.PARSER.apply(p, t), SHARDS);
    SuggestDictionary _suggest = new SuggestDictionary<>();
    PARSER.declareObject(SearchResponse::setSuggest, (p, t) -> _suggest.PARSER.apply(p, t), SUGGEST);
    PARSER.declareBoolean(SearchResponse::setTerminatedEarly, TERMINATED_EARLY);
    PARSER.declareBoolean(SearchResponse::setTimedOut, TIMED_OUT);
    PARSER.declareLong(SearchResponse::setTook, TOOK);
    PARSER.declareLong(SearchResponse::setTotal, TOTAL);
  }

}
