
package org.elasticsearch.aggregations.bucket.terms;

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
import org.elasticsearch.aggregations.bucket.terms.*;
import org.elasticsearch.common_abstractions.infer.field.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.common_options.scripting.*;

public class TermsAggregation  implements XContentable<TermsAggregation> {
  
  static final ParseField COLLECT_MODE = new ParseField("collect_mode");
  private TermsAggregationCollectMode _collectMode;
  public TermsAggregationCollectMode getCollectMode() { return this._collectMode; }
  public TermsAggregation setCollectMode(TermsAggregationCollectMode val) { this._collectMode = val; return this; }


  static final ParseField EXCLUDE = new ParseField("exclude");
  private TermsExclude _exclude;
  public TermsExclude getExclude() { return this._exclude; }
  public TermsAggregation setExclude(TermsExclude val) { this._exclude = val; return this; }


  static final ParseField EXECUTION_HINT = new ParseField("execution_hint");
  private TermsAggregationExecutionHint _executionHint;
  public TermsAggregationExecutionHint getExecutionHint() { return this._executionHint; }
  public TermsAggregation setExecutionHint(TermsAggregationExecutionHint val) { this._executionHint = val; return this; }


  static final ParseField FIELD = new ParseField("field");
  private Field _field;
  public Field getField() { return this._field; }
  public TermsAggregation setField(Field val) { this._field = val; return this; }


  static final ParseField INCLUDE = new ParseField("include");
  private TermsInclude _include;
  public TermsInclude getInclude() { return this._include; }
  public TermsAggregation setInclude(TermsInclude val) { this._include = val; return this; }


  static final ParseField MIN_DOC_COUNT = new ParseField("min_doc_count");
  private Integer _minDocCount;
  public Integer getMinDocCount() { return this._minDocCount; }
  public TermsAggregation setMinDocCount(Integer val) { this._minDocCount = val; return this; }


  static final ParseField MISSING = new ParseField("missing");
  private Object _missing;
  public Object getMissing() { return this._missing; }
  public TermsAggregation setMissing(Object val) { this._missing = val; return this; }


  static final ParseField ORDER = new ParseField("order");
  private List<TermsOrder> _order;
  public List<TermsOrder> getOrder() { return this._order; }
  public TermsAggregation setOrder(List<TermsOrder> val) { this._order = val; return this; }


  static final ParseField SCRIPT = new ParseField("script");
  private Script _script;
  public Script getScript() { return this._script; }
  public TermsAggregation setScript(Script val) { this._script = val; return this; }


  static final ParseField SHARD_SIZE = new ParseField("shard_size");
  private Integer _shardSize;
  public Integer getShardSize() { return this._shardSize; }
  public TermsAggregation setShardSize(Integer val) { this._shardSize = val; return this; }


  static final ParseField SHOW_TERM_DOC_COUNT_ERROR = new ParseField("show_term_doc_count_error");
  private Boolean _showTermDocCountError;
  public Boolean getShowTermDocCountError() { return this._showTermDocCountError; }
  public TermsAggregation setShowTermDocCountError(Boolean val) { this._showTermDocCountError = val; return this; }


  static final ParseField SIZE = new ParseField("size");
  private Integer _size;
  public Integer getSize() { return this._size; }
  public TermsAggregation setSize(Integer val) { this._size = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
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
      builder.field(FIELD.getPreferredName());
      _field.toXContent(builder, params);
    }
    if (_include != null) {
      builder.field(INCLUDE.getPreferredName());
      _include.toXContent(builder, params);
    }
    if (_minDocCount != null) {
      builder.field(MIN_DOC_COUNT.getPreferredName(), _minDocCount);
    }
    if (_missing != null) {
      builder.field(MISSING.getPreferredName(), _missing);
    }
    if (_order != null) {
      builder.array(ORDER.getPreferredName(), _order);
    }
    if (_script != null) {
      builder.field(SCRIPT.getPreferredName());
      _script.toXContent(builder, params);
    }
    if (_shardSize != null) {
      builder.field(SHARD_SIZE.getPreferredName(), _shardSize);
    }
    if (_showTermDocCountError != null) {
      builder.field(SHOW_TERM_DOC_COUNT_ERROR.getPreferredName(), _showTermDocCountError);
    }
    if (_size != null) {
      builder.field(SIZE.getPreferredName(), _size);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public TermsAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TermsAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TermsAggregation, Void> PARSER =
    new ObjectParser<>(TermsAggregation.class.getName(), false, TermsAggregation::new);

  static {
    PARSER.declareField(TermsAggregation::setCollectMode, (p, t) -> TermsAggregationCollectMode.PARSER.apply(p), COLLECT_MODE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareObject(TermsAggregation::setExclude, (p, t) -> TermsExclude.PARSER.apply(p, t), EXCLUDE);
    PARSER.declareField(TermsAggregation::setExecutionHint, (p, t) -> TermsAggregationExecutionHint.PARSER.apply(p), EXECUTION_HINT, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareObject(TermsAggregation::setField, (p, t) -> Field.createFrom(p), FIELD);
    PARSER.declareObject(TermsAggregation::setInclude, (p, t) -> TermsInclude.PARSER.apply(p, t), INCLUDE);
    PARSER.declareInt(TermsAggregation::setMinDocCount, MIN_DOC_COUNT);
    PARSER.declareObject(TermsAggregation::setMissing, (p, t) -> p.objectText(), MISSING);
    PARSER.declareObjectArray(TermsAggregation::setOrder, (p, t) -> TermsOrder.PARSER.apply(p, t), ORDER);
    PARSER.declareObject(TermsAggregation::setScript, (p, t) -> Script.PARSER.apply(p, t), SCRIPT);
    PARSER.declareInt(TermsAggregation::setShardSize, SHARD_SIZE);
    PARSER.declareBoolean(TermsAggregation::setShowTermDocCountError, SHOW_TERM_DOC_COUNT_ERROR);
    PARSER.declareInt(TermsAggregation::setSize, SIZE);
  }

}
