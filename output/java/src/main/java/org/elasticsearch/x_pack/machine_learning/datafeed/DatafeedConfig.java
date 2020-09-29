
package org.elasticsearch.x_pack.machine_learning.datafeed;

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
import org.elasticsearch.x_pack.machine_learning.datafeed.*;
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.query_dsl.abstractions.container.*;
import org.elasticsearch.common_options.scripting.*;

public class DatafeedConfig  implements XContentable<DatafeedConfig> {
  
  static final ParseField AGGREGATIONS = new ParseField("aggregations");
  private NamedContainer<String, AggregationContainer> _aggregations;
  public NamedContainer<String, AggregationContainer> getAggregations() { return this._aggregations; }
  public DatafeedConfig setAggregations(NamedContainer<String, AggregationContainer> val) { this._aggregations = val; return this; }

  static final ParseField CHUNKING_CONFIG = new ParseField("chunking_config");
  private ChunkingConfig _chunkingConfig;
  public ChunkingConfig getChunkingConfig() { return this._chunkingConfig; }
  public DatafeedConfig setChunkingConfig(ChunkingConfig val) { this._chunkingConfig = val; return this; }

  static final ParseField DATAFEED_ID = new ParseField("datafeed_id");
  private String _datafeedId;
  public String getDatafeedId() { return this._datafeedId; }
  public DatafeedConfig setDatafeedId(String val) { this._datafeedId = val; return this; }

  static final ParseField FREQUENCY = new ParseField("frequency");
  private String _frequency;
  public String getFrequency() { return this._frequency; }
  public DatafeedConfig setFrequency(String val) { this._frequency = val; return this; }

  static final ParseField INDICES = new ParseField("indices");
  private Indices _indices;
  public Indices getIndices() { return this._indices; }
  public DatafeedConfig setIndices(Indices val) { this._indices = val; return this; }

  static final ParseField JOB_ID = new ParseField("job_id");
  private String _jobId;
  public String getJobId() { return this._jobId; }
  public DatafeedConfig setJobId(String val) { this._jobId = val; return this; }

  static final ParseField MAX_EMPTY_SEARCHES = new ParseField("max_empty_searches");
  private int _maxEmptySearches;
  private boolean _maxEmptySearches$isSet;
  public int getMaxEmptySearches() { return this._maxEmptySearches; }
  public DatafeedConfig setMaxEmptySearches(int val) {
    this._maxEmptySearches = val;
    _maxEmptySearches$isSet = true;
    return this;
  }

  static final ParseField QUERY = new ParseField("query");
  private QueryContainer _query;
  public QueryContainer getQuery() { return this._query; }
  public DatafeedConfig setQuery(QueryContainer val) { this._query = val; return this; }

  static final ParseField QUERY_DELAY = new ParseField("query_delay");
  private String _queryDelay;
  public String getQueryDelay() { return this._queryDelay; }
  public DatafeedConfig setQueryDelay(String val) { this._queryDelay = val; return this; }

  static final ParseField SCRIPT_FIELDS = new ParseField("script_fields");
  private NamedContainer<String, ScriptField> _scriptFields;
  public NamedContainer<String, ScriptField> getScriptFields() { return this._scriptFields; }
  public DatafeedConfig setScriptFields(NamedContainer<String, ScriptField> val) { this._scriptFields = val; return this; }

  static final ParseField SCROLL_SIZE = new ParseField("scroll_size");
  private int _scrollSize;
  private boolean _scrollSize$isSet;
  public int getScrollSize() { return this._scrollSize; }
  public DatafeedConfig setScrollSize(int val) {
    this._scrollSize = val;
    _scrollSize$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
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
      builder.field(FREQUENCY.getPreferredName(), _frequency);
    }
    if (_indices != null) {
      builder.field(INDICES.getPreferredName());
      _indices.toXContent(builder, params);
    }
    if (_jobId != null) {
      builder.field(JOB_ID.getPreferredName(), _jobId);
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
  public DatafeedConfig fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DatafeedConfig.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DatafeedConfig, Void> PARSER =
    new ObjectParser<>(DatafeedConfig.class.getName(), false, DatafeedConfig::new);

  static {
    PARSER.declareObject(DatafeedConfig::setAggregations, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> AggregationContainer.PARSER.apply(pp, null)), AGGREGATIONS);
    PARSER.declareObject(DatafeedConfig::setChunkingConfig, (p, t) -> ChunkingConfig.PARSER.apply(p, t), CHUNKING_CONFIG);
    PARSER.declareString(DatafeedConfig::setDatafeedId, DATAFEED_ID);
    PARSER.declareString(DatafeedConfig::setFrequency, FREQUENCY);
    PARSER.declareObject(DatafeedConfig::setIndices, (p, t) -> Indices.createFrom(p), INDICES);
    PARSER.declareString(DatafeedConfig::setJobId, JOB_ID);
    PARSER.declareInt(DatafeedConfig::setMaxEmptySearches, MAX_EMPTY_SEARCHES);
    PARSER.declareObject(DatafeedConfig::setQuery, (p, t) -> QueryContainer.PARSER.apply(p, t), QUERY);
    PARSER.declareString(DatafeedConfig::setQueryDelay, QUERY_DELAY);
    PARSER.declareObject(DatafeedConfig::setScriptFields, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> ScriptField.PARSER.apply(pp, null)), SCRIPT_FIELDS);
    PARSER.declareInt(DatafeedConfig::setScrollSize, SCROLL_SIZE);
  }

}
