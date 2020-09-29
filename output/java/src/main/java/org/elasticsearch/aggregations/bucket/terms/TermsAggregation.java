
package org.elasticsearch.aggregations.bucket.terms;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.aggregations.bucket.terms.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.aggregations.*;
import org.elasticsearch.search.search.sort.*;
import org.elasticsearch.common_options.scripting.*;

public class TermsAggregation  implements XContentable<TermsAggregation> {
  
  static final ParseField COLLECT_MODE = new ParseField("collect_mode");
  private TermsAggregationCollectMode _collectMode;
  public TermsAggregationCollectMode getCollectMode() { return this._collectMode; }
  public TermsAggregation setCollectMode(TermsAggregationCollectMode val) { this._collectMode = val; return this; }

  static final ParseField EXCLUDE = new ParseField("exclude");
  private Union2<String, List<String>> _exclude;
  public Union2<String, List<String>> getExclude() { return this._exclude; }
  public TermsAggregation setExclude(Union2<String, List<String>> val) { this._exclude = val; return this; }

  static final ParseField EXECUTION_HINT = new ParseField("execution_hint");
  private TermsAggregationExecutionHint _executionHint;
  public TermsAggregationExecutionHint getExecutionHint() { return this._executionHint; }
  public TermsAggregation setExecutionHint(TermsAggregationExecutionHint val) { this._executionHint = val; return this; }

  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public TermsAggregation setField(String val) { this._field = val; return this; }

  static final ParseField INCLUDE = new ParseField("include");
  private Union3<String, List<String>, TermsInclude> _include;
  public Union3<String, List<String>, TermsInclude> getInclude() { return this._include; }
  public TermsAggregation setInclude(Union3<String, List<String>, TermsInclude> val) { this._include = val; return this; }

  static final ParseField MIN_DOC_COUNT = new ParseField("min_doc_count");
  private int _minDocCount;
  private boolean _minDocCount$isSet;
  public int getMinDocCount() { return this._minDocCount; }
  public TermsAggregation setMinDocCount(int val) {
    this._minDocCount = val;
    _minDocCount$isSet = true;
    return this;
  }

  static final ParseField MISSING = new ParseField("missing");
  private Missing _missing;
  public Missing getMissing() { return this._missing; }
  public TermsAggregation setMissing(Missing val) { this._missing = val; return this; }

  static final ParseField VALUE_TYPE = new ParseField("value_type");
  private String _valueType;
  public String getValueType() { return this._valueType; }
  public TermsAggregation setValueType(String val) { this._valueType = val; return this; }

  static final ParseField ORDER = new ParseField("order");
  private NamedContainer<String, SortOrder> _order;
  public NamedContainer<String, SortOrder> getOrder() { return this._order; }
  public TermsAggregation setOrder(NamedContainer<String, SortOrder> val) { this._order = val; return this; }

  static final ParseField SCRIPT = new ParseField("script");
  private Script _script;
  public Script getScript() { return this._script; }
  public TermsAggregation setScript(Script val) { this._script = val; return this; }

  static final ParseField SHARD_SIZE = new ParseField("shard_size");
  private int _shardSize;
  private boolean _shardSize$isSet;
  public int getShardSize() { return this._shardSize; }
  public TermsAggregation setShardSize(int val) {
    this._shardSize = val;
    _shardSize$isSet = true;
    return this;
  }

  static final ParseField SHOW_TERM_DOC_COUNT_ERROR = new ParseField("show_term_doc_count_error");
  private Boolean _showTermDocCountError;
  public Boolean getShowTermDocCountError() { return this._showTermDocCountError; }
  public TermsAggregation setShowTermDocCountError(Boolean val) { this._showTermDocCountError = val; return this; }

  static final ParseField SIZE = new ParseField("size");
  private int _size;
  private boolean _size$isSet;
  public int getSize() { return this._size; }
  public TermsAggregation setSize(int val) {
    this._size = val;
    _size$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_collectMode != null) {
      builder.field(COLLECT_MODE.getPreferredName());
      _collectMode.toXContent(builder, params);
    }
    if (_exclude != null) {
      builder.field(EXCLUDE.getPreferredName());
      _exclude.toXContent(builder, params);
    }
    if (_executionHint != null) {
      builder.field(EXECUTION_HINT.getPreferredName());
      _executionHint.toXContent(builder, params);
    }
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_include != null) {
      builder.field(INCLUDE.getPreferredName());
      _include.toXContent(builder, params);
    }
    if (_minDocCount$isSet) {
      builder.field(MIN_DOC_COUNT.getPreferredName(), _minDocCount);
    }
    if (_missing != null) {
      builder.field(MISSING.getPreferredName());
      _missing.toXContent(builder, params);
    }
    if (_valueType != null) {
      builder.field(VALUE_TYPE.getPreferredName(), _valueType);
    }
    if (_order != null) {
      builder.field(ORDER.getPreferredName());
      _order.toXContent(builder, params);
    }
    if (_script != null) {
      builder.field(SCRIPT.getPreferredName());
      _script.toXContent(builder, params);
    }
    if (_shardSize$isSet) {
      builder.field(SHARD_SIZE.getPreferredName(), _shardSize);
    }
    if (_showTermDocCountError != null) {
      builder.field(SHOW_TERM_DOC_COUNT_ERROR.getPreferredName(), _showTermDocCountError);
    }
    if (_size$isSet) {
      builder.field(SIZE.getPreferredName(), _size);
    }
  }

  @Override
  public TermsAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TermsAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TermsAggregation, Void> PARSER =
    new ObjectParser<>(TermsAggregation.class.getName(), false, TermsAggregation::new);

  static {
    PARSER.declareField(TermsAggregation::setCollectMode, (p, t) -> TermsAggregationCollectMode.PARSER.apply(p), COLLECT_MODE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareObject(TermsAggregation::setExclude, (p, t) ->  new Union2<String, List<String>>(), EXCLUDE);
    PARSER.declareField(TermsAggregation::setExecutionHint, (p, t) -> TermsAggregationExecutionHint.PARSER.apply(p), EXECUTION_HINT, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareString(TermsAggregation::setField, FIELD);
    PARSER.declareObject(TermsAggregation::setInclude, (p, t) ->  new Union3<String, List<String>, TermsInclude>(), INCLUDE);
    PARSER.declareInt(TermsAggregation::setMinDocCount, MIN_DOC_COUNT);
    PARSER.declareObject(TermsAggregation::setMissing, (p, t) -> Missing.PARSER.apply(p, t), MISSING);
    PARSER.declareString(TermsAggregation::setValueType, VALUE_TYPE);
    PARSER.declareObject(TermsAggregation::setOrder, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> SortOrder.PARSER.apply(p)), ORDER);
    PARSER.declareObject(TermsAggregation::setScript, (p, t) -> Script.PARSER.apply(p, t), SCRIPT);
    PARSER.declareInt(TermsAggregation::setShardSize, SHARD_SIZE);
    PARSER.declareBoolean(TermsAggregation::setShowTermDocCountError, SHOW_TERM_DOC_COUNT_ERROR);
    PARSER.declareInt(TermsAggregation::setSize, SIZE);
  }

}
