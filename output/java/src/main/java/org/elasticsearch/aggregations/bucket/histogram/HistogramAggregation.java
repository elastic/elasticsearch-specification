
package org.elasticsearch.aggregations.bucket.histogram;

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
import org.elasticsearch.aggregations.bucket.histogram.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.common_abstractions.infer.field.*;
import org.elasticsearch.common_options.scripting.*;

public class HistogramAggregation  implements XContentable<HistogramAggregation> {
  
  static final ParseField EXTENDED_BOUNDS = new ParseField("extended_bounds");
  private ExtendedBounds<Double> _extendedBounds;
  public ExtendedBounds<Double> getExtendedBounds() { return this._extendedBounds; }
  public HistogramAggregation setExtendedBounds(ExtendedBounds<Double> val) { this._extendedBounds = val; return this; }


  static final ParseField FIELD = new ParseField("field");
  private Field _field;
  public Field getField() { return this._field; }
  public HistogramAggregation setField(Field val) { this._field = val; return this; }


  static final ParseField INTERVAL = new ParseField("interval");
  private Double _interval;
  public Double getInterval() { return this._interval; }
  public HistogramAggregation setInterval(Double val) { this._interval = val; return this; }


  static final ParseField MIN_DOC_COUNT = new ParseField("min_doc_count");
  private Integer _minDocCount;
  public Integer getMinDocCount() { return this._minDocCount; }
  public HistogramAggregation setMinDocCount(Integer val) { this._minDocCount = val; return this; }


  static final ParseField MISSING = new ParseField("missing");
  private Double _missing;
  public Double getMissing() { return this._missing; }
  public HistogramAggregation setMissing(Double val) { this._missing = val; return this; }


  static final ParseField OFFSET = new ParseField("offset");
  private Double _offset;
  public Double getOffset() { return this._offset; }
  public HistogramAggregation setOffset(Double val) { this._offset = val; return this; }


  static final ParseField ORDER = new ParseField("order");
  private HistogramOrder _order;
  public HistogramOrder getOrder() { return this._order; }
  public HistogramAggregation setOrder(HistogramOrder val) { this._order = val; return this; }


  static final ParseField SCRIPT = new ParseField("script");
  private Script _script;
  public Script getScript() { return this._script; }
  public HistogramAggregation setScript(Script val) { this._script = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_extendedBounds != null) {
      builder.field(EXTENDED_BOUNDS.getPreferredName());
      _extendedBounds.toXContent(builder, params);
    }
    if (_field != null) {
      builder.field(FIELD.getPreferredName());
      _field.toXContent(builder, params);
    }
    if (_interval != null) {
      builder.field(INTERVAL.getPreferredName(), _interval);
    }
    if (_minDocCount != null) {
      builder.field(MIN_DOC_COUNT.getPreferredName(), _minDocCount);
    }
    if (_missing != null) {
      builder.field(MISSING.getPreferredName(), _missing);
    }
    if (_offset != null) {
      builder.field(OFFSET.getPreferredName(), _offset);
    }
    if (_order != null) {
      builder.field(ORDER.getPreferredName());
      _order.toXContent(builder, params);
    }
    if (_script != null) {
      builder.field(SCRIPT.getPreferredName());
      _script.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public HistogramAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return HistogramAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<HistogramAggregation, Void> PARSER =
    new ObjectParser<>(HistogramAggregation.class.getName(), false, HistogramAggregation::new);

  static {
    ExtendedBounds<Double> _extendedBounds = new ExtendedBounds<Double>();
    PARSER.declareObject(HistogramAggregation::setExtendedBounds, (p, t) -> _extendedBounds.PARSER.apply(p, t), EXTENDED_BOUNDS);
    PARSER.declareObject(HistogramAggregation::setField, (p, t) -> Field.createFrom(p), FIELD);
    PARSER.declareDouble(HistogramAggregation::setInterval, INTERVAL);
    PARSER.declareInt(HistogramAggregation::setMinDocCount, MIN_DOC_COUNT);
    PARSER.declareDouble(HistogramAggregation::setMissing, MISSING);
    PARSER.declareDouble(HistogramAggregation::setOffset, OFFSET);
    PARSER.declareObject(HistogramAggregation::setOrder, (p, t) -> HistogramOrder.PARSER.apply(p, t), ORDER);
    PARSER.declareObject(HistogramAggregation::setScript, (p, t) -> Script.PARSER.apply(p, t), SCRIPT);
  }

}
