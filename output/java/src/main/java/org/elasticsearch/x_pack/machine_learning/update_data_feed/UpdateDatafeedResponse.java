
package org.elasticsearch.x_pack.machine_learning.update_data_feed;

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
import org.elasticsearch.aggregations.*;
import org.elasticsearch.x_pack.machine_learning.datafeed.*;
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.common_abstractions.infer.indices.*;
import org.elasticsearch.query_dsl.abstractions.container.*;
import org.elasticsearch.common_options.scripting.*;
import org.elasticsearch.internal.*;

public class UpdateDatafeedResponse  implements XContentable<UpdateDatafeedResponse> {
  
  static final ParseField AGGREGATIONS = new ParseField("aggregations");
  private NamedContainer<String, AggregationContainer> _aggregations;
  public NamedContainer<String, AggregationContainer> getAggregations() { return this._aggregations; }
  public UpdateDatafeedResponse setAggregations(NamedContainer<String, AggregationContainer> val) { this._aggregations = val; return this; }


  static final ParseField CHUNKING_CONFIG = new ParseField("chunking_config");
  private ChunkingConfig _chunkingConfig;
  public ChunkingConfig getChunkingConfig() { return this._chunkingConfig; }
  public UpdateDatafeedResponse setChunkingConfig(ChunkingConfig val) { this._chunkingConfig = val; return this; }


  static final ParseField DATAFEED_ID = new ParseField("datafeed_id");
  private String _datafeedId;
  public String getDatafeedId() { return this._datafeedId; }
  public UpdateDatafeedResponse setDatafeedId(String val) { this._datafeedId = val; return this; }


  static final ParseField FREQUENCY = new ParseField("frequency");
  private Time _frequency;
  public Time getFrequency() { return this._frequency; }
  public UpdateDatafeedResponse setFrequency(Time val) { this._frequency = val; return this; }


  static final ParseField INDICES = new ParseField("indices");
  private Indices _indices;
  public Indices getIndices() { return this._indices; }
  public UpdateDatafeedResponse setIndices(Indices val) { this._indices = val; return this; }


  static final ParseField JOB_ID = new ParseField("job_id");
  private String _jobId;
  public String getJobId() { return this._jobId; }
  public UpdateDatafeedResponse setJobId(String val) { this._jobId = val; return this; }


  static final ParseField QUERY = new ParseField("query");
  private QueryContainer _query;
  public QueryContainer getQuery() { return this._query; }
  public UpdateDatafeedResponse setQuery(QueryContainer val) { this._query = val; return this; }


  static final ParseField QUERY_DELAY = new ParseField("query_delay");
  private Time _queryDelay;
  public Time getQueryDelay() { return this._queryDelay; }
  public UpdateDatafeedResponse setQueryDelay(Time val) { this._queryDelay = val; return this; }


  static final ParseField SCRIPT_FIELDS = new ParseField("script_fields");
  private NamedContainer<String, ScriptField> _scriptFields;
  public NamedContainer<String, ScriptField> getScriptFields() { return this._scriptFields; }
  public UpdateDatafeedResponse setScriptFields(NamedContainer<String, ScriptField> val) { this._scriptFields = val; return this; }


  static final ParseField SCROLL_SIZE = new ParseField("scroll_size");
  private Integer _scrollSize;
  public Integer getScrollSize() { return this._scrollSize; }
  public UpdateDatafeedResponse setScrollSize(Integer val) { this._scrollSize = val; return this; }


  static final ParseField MAX_EMPTY_SEARCHES = new ParseField("max_empty_searches");
  private Integer _maxEmptySearches;
  public Integer getMaxEmptySearches() { return this._maxEmptySearches; }
  public UpdateDatafeedResponse setMaxEmptySearches(Integer val) { this._maxEmptySearches = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_aggregations != null) {
      builder.field(AGGREGATIONS.getPreferredName());
      _aggregations.toXContent(builder, params);
    }
    if (_chunkingConfig != null) {
      builder.field(CHUNKING_CONFIG.getPreferredName());
      _chunkingConfig.toXContent(builder, params);
    }
    if (_datafeedId != null) {
      builder.field(DATAFEED_ID.getPreferredName(), _datafeedId);
    }
    if (_frequency != null) {
      builder.field(FREQUENCY.getPreferredName());
      _frequency.toXContent(builder, params);
    }
    if (_indices != null) {
      builder.field(INDICES.getPreferredName());
      _indices.toXContent(builder, params);
    }
    if (_jobId != null) {
      builder.field(JOB_ID.getPreferredName(), _jobId);
    }
    if (_query != null) {
      builder.field(QUERY.getPreferredName());
      _query.toXContent(builder, params);
    }
    if (_queryDelay != null) {
      builder.field(QUERY_DELAY.getPreferredName());
      _queryDelay.toXContent(builder, params);
    }
    if (_scriptFields != null) {
      builder.field(SCRIPT_FIELDS.getPreferredName());
      _scriptFields.toXContent(builder, params);
    }
    if (_scrollSize != null) {
      builder.field(SCROLL_SIZE.getPreferredName(), _scrollSize);
    }
    if (_maxEmptySearches != null) {
      builder.field(MAX_EMPTY_SEARCHES.getPreferredName(), _maxEmptySearches);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public UpdateDatafeedResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return UpdateDatafeedResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<UpdateDatafeedResponse, Void> PARSER =
    new ObjectParser<>(UpdateDatafeedResponse.class.getName(), false, UpdateDatafeedResponse::new);

  static {
    PARSER.declareObject(UpdateDatafeedResponse::setAggregations, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> AggregationContainer.PARSER.apply(pp, null)), AGGREGATIONS);
    PARSER.declareObject(UpdateDatafeedResponse::setChunkingConfig, (p, t) -> ChunkingConfig.PARSER.apply(p, t), CHUNKING_CONFIG);
    PARSER.declareString(UpdateDatafeedResponse::setDatafeedId, DATAFEED_ID);
    PARSER.declareObject(UpdateDatafeedResponse::setFrequency, (p, t) -> Time.PARSER.apply(p, t), FREQUENCY);
    PARSER.declareObject(UpdateDatafeedResponse::setIndices, (p, t) -> Indices.createFrom(p), INDICES);
    PARSER.declareString(UpdateDatafeedResponse::setJobId, JOB_ID);
    PARSER.declareObject(UpdateDatafeedResponse::setQuery, (p, t) -> QueryContainer.PARSER.apply(p, t), QUERY);
    PARSER.declareObject(UpdateDatafeedResponse::setQueryDelay, (p, t) -> Time.PARSER.apply(p, t), QUERY_DELAY);
    PARSER.declareObject(UpdateDatafeedResponse::setScriptFields, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> ScriptField.PARSER.apply(pp, null)), SCRIPT_FIELDS);
    PARSER.declareInt(UpdateDatafeedResponse::setScrollSize, SCROLL_SIZE);
    PARSER.declareInt(UpdateDatafeedResponse::setMaxEmptySearches, MAX_EMPTY_SEARCHES);
  }

}
