
package org.elasticsearch.x_pack.machine_learning.update_data_feed;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common.*;
import org.elasticsearch.aggregations.*;
import org.elasticsearch.x_pack.machine_learning.datafeed.*;
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.query_dsl.abstractions.container.*;
import org.elasticsearch.common_options.scripting.*;
import org.elasticsearch.common_abstractions.request.*;

public class UpdateDatafeedRequest extends RequestBase<UpdateDatafeedRequest> implements XContentable<UpdateDatafeedRequest> {
  
  static final ParseField ALLOW_NO_INDICES = new ParseField("allow_no_indices");
  private Boolean _allowNoIndices;
  public Boolean getAllowNoIndices() { return this._allowNoIndices; }
  public UpdateDatafeedRequest setAllowNoIndices(Boolean val) { this._allowNoIndices = val; return this; }

  static final ParseField EXPAND_WILDCARDS = new ParseField("expand_wildcards");
  private ExpandWildcards _expandWildcards;
  public ExpandWildcards getExpandWildcards() { return this._expandWildcards; }
  public UpdateDatafeedRequest setExpandWildcards(ExpandWildcards val) { this._expandWildcards = val; return this; }

  static final ParseField IGNORE_THROTTLED = new ParseField("ignore_throttled");
  private Boolean _ignoreThrottled;
  public Boolean getIgnoreThrottled() { return this._ignoreThrottled; }
  public UpdateDatafeedRequest setIgnoreThrottled(Boolean val) { this._ignoreThrottled = val; return this; }

  static final ParseField IGNORE_UNAVAILABLE = new ParseField("ignore_unavailable");
  private Boolean _ignoreUnavailable;
  public Boolean getIgnoreUnavailable() { return this._ignoreUnavailable; }
  public UpdateDatafeedRequest setIgnoreUnavailable(Boolean val) { this._ignoreUnavailable = val; return this; }

  static final ParseField AGGREGATIONS = new ParseField("aggregations");
  private NamedContainer<String, AggregationContainer> _aggregations;
  public NamedContainer<String, AggregationContainer> getAggregations() { return this._aggregations; }
  public UpdateDatafeedRequest setAggregations(NamedContainer<String, AggregationContainer> val) { this._aggregations = val; return this; }

  static final ParseField CHUNKING_CONFIG = new ParseField("chunking_config");
  private ChunkingConfig _chunkingConfig;
  public ChunkingConfig getChunkingConfig() { return this._chunkingConfig; }
  public UpdateDatafeedRequest setChunkingConfig(ChunkingConfig val) { this._chunkingConfig = val; return this; }

  static final ParseField FREQUENCY = new ParseField("frequency");
  private String _frequency;
  public String getFrequency() { return this._frequency; }
  public UpdateDatafeedRequest setFrequency(String val) { this._frequency = val; return this; }

  static final ParseField INDICES = new ParseField("indices");
  private Indices _indices;
  public Indices getIndices() { return this._indices; }
  public UpdateDatafeedRequest setIndices(Indices val) { this._indices = val; return this; }

  static final ParseField JOB_ID = new ParseField("job_id");
  private Id _jobId;
  public Id getJobId() { return this._jobId; }
  public UpdateDatafeedRequest setJobId(Id val) { this._jobId = val; return this; }

  static final ParseField MAX_EMPTY_SEARCHES = new ParseField("max_empty_searches");
  private int _maxEmptySearches;
  private boolean _maxEmptySearches$isSet;
  public int getMaxEmptySearches() { return this._maxEmptySearches; }
  public UpdateDatafeedRequest setMaxEmptySearches(int val) {
    this._maxEmptySearches = val;
    _maxEmptySearches$isSet = true;
    return this;
  }

  static final ParseField QUERY = new ParseField("query");
  private QueryContainer _query;
  public QueryContainer getQuery() { return this._query; }
  public UpdateDatafeedRequest setQuery(QueryContainer val) { this._query = val; return this; }

  static final ParseField QUERY_DELAY = new ParseField("query_delay");
  private String _queryDelay;
  public String getQueryDelay() { return this._queryDelay; }
  public UpdateDatafeedRequest setQueryDelay(String val) { this._queryDelay = val; return this; }

  static final ParseField SCRIPT_FIELDS = new ParseField("script_fields");
  private NamedContainer<String, ScriptField> _scriptFields;
  public NamedContainer<String, ScriptField> getScriptFields() { return this._scriptFields; }
  public UpdateDatafeedRequest setScriptFields(NamedContainer<String, ScriptField> val) { this._scriptFields = val; return this; }

  static final ParseField SCROLL_SIZE = new ParseField("scroll_size");
  private int _scrollSize;
  private boolean _scrollSize$isSet;
  public int getScrollSize() { return this._scrollSize; }
  public UpdateDatafeedRequest setScrollSize(int val) {
    this._scrollSize = val;
    _scrollSize$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_allowNoIndices != null) {
      builder.field(ALLOW_NO_INDICES.getPreferredName(), _allowNoIndices);
    }
    if (_expandWildcards != null) {
      builder.field(EXPAND_WILDCARDS.getPreferredName());
      _expandWildcards.toXContent(builder, params);
    }
    if (_ignoreThrottled != null) {
      builder.field(IGNORE_THROTTLED.getPreferredName(), _ignoreThrottled);
    }
    if (_ignoreUnavailable != null) {
      builder.field(IGNORE_UNAVAILABLE.getPreferredName(), _ignoreUnavailable);
    }
    if (_aggregations != null) {
      builder.field(AGGREGATIONS.getPreferredName());
      _aggregations.toXContent(builder, params);
    }
    if (_chunkingConfig != null) {
      builder.field(CHUNKING_CONFIG.getPreferredName());
      _chunkingConfig.toXContent(builder, params);
    }
    if (_frequency != null) {
      builder.field(FREQUENCY.getPreferredName(), _frequency);
    }
    if (_indices != null) {
      builder.field(INDICES.getPreferredName());
      _indices.toXContent(builder, params);
    }
    if (_jobId != null) {
      builder.field(JOB_ID.getPreferredName());
      _jobId.toXContent(builder, params);
    }
    if (_maxEmptySearches$isSet) {
      builder.field(MAX_EMPTY_SEARCHES.getPreferredName(), _maxEmptySearches);
    }
    if (_query != null) {
      builder.field(QUERY.getPreferredName());
      _query.toXContent(builder, params);
    }
    if (_queryDelay != null) {
      builder.field(QUERY_DELAY.getPreferredName(), _queryDelay);
    }
    if (_scriptFields != null) {
      builder.field(SCRIPT_FIELDS.getPreferredName());
      _scriptFields.toXContent(builder, params);
    }
    if (_scrollSize$isSet) {
      builder.field(SCROLL_SIZE.getPreferredName(), _scrollSize);
    }
  }

  @Override
  public UpdateDatafeedRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return UpdateDatafeedRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<UpdateDatafeedRequest, Void> PARSER =
    new ObjectParser<>(UpdateDatafeedRequest.class.getName(), false, UpdateDatafeedRequest::new);

  static {
    PARSER.declareBoolean(UpdateDatafeedRequest::setAllowNoIndices, ALLOW_NO_INDICES);
    PARSER.declareField(UpdateDatafeedRequest::setExpandWildcards, (p, t) -> ExpandWildcards.PARSER.apply(p), EXPAND_WILDCARDS, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareBoolean(UpdateDatafeedRequest::setIgnoreThrottled, IGNORE_THROTTLED);
    PARSER.declareBoolean(UpdateDatafeedRequest::setIgnoreUnavailable, IGNORE_UNAVAILABLE);
    PARSER.declareObject(UpdateDatafeedRequest::setAggregations, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> AggregationContainer.PARSER.apply(pp, null)), AGGREGATIONS);
    PARSER.declareObject(UpdateDatafeedRequest::setChunkingConfig, (p, t) -> ChunkingConfig.PARSER.apply(p, t), CHUNKING_CONFIG);
    PARSER.declareString(UpdateDatafeedRequest::setFrequency, FREQUENCY);
    PARSER.declareObject(UpdateDatafeedRequest::setIndices, (p, t) -> Indices.createFrom(p), INDICES);
    PARSER.declareObject(UpdateDatafeedRequest::setJobId, (p, t) -> Id.createFrom(p), JOB_ID);
    PARSER.declareInt(UpdateDatafeedRequest::setMaxEmptySearches, MAX_EMPTY_SEARCHES);
    PARSER.declareObject(UpdateDatafeedRequest::setQuery, (p, t) -> QueryContainer.PARSER.apply(p, t), QUERY);
    PARSER.declareString(UpdateDatafeedRequest::setQueryDelay, QUERY_DELAY);
    PARSER.declareObject(UpdateDatafeedRequest::setScriptFields, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> ScriptField.PARSER.apply(pp, null)), SCRIPT_FIELDS);
    PARSER.declareInt(UpdateDatafeedRequest::setScrollSize, SCROLL_SIZE);
  }

}
