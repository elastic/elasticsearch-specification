
package org.elasticsearch.aggregations.bucket.histogram;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.aggregations.bucket.histogram.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.common_options.scripting.*;

public class HistogramAggregation  implements XContentable<HistogramAggregation> {
  
  static final ParseField EXTENDED_BOUNDS = new ParseField("extended_bounds");
  private ExtendedBounds<Double> _extendedBounds;
  public ExtendedBounds<Double> getExtendedBounds() { return this._extendedBounds; }
  public HistogramAggregation setExtendedBounds(ExtendedBounds<Double> val) { this._extendedBounds = val; return this; }

  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public HistogramAggregation setField(String val) { this._field = val; return this; }

  static final ParseField INTERVAL = new ParseField("interval");
  private double _interval;
  private boolean _interval$isSet;
  public double getInterval() { return this._interval; }
  public HistogramAggregation setInterval(double val) {
    this._interval = val;
    _interval$isSet = true;
    return this;
  }

  static final ParseField MIN_DOC_COUNT = new ParseField("min_doc_count");
  private int _minDocCount;
  private boolean _minDocCount$isSet;
  public int getMinDocCount() { return this._minDocCount; }
  public HistogramAggregation setMinDocCount(int val) {
    this._minDocCount = val;
    _minDocCount$isSet = true;
    return this;
  }

  static final ParseField MISSING = new ParseField("missing");
  private double _missing;
  private boolean _missing$isSet;
  public double getMissing() { return this._missing; }
  public HistogramAggregation setMissing(double val) {
    this._missing = val;
    _missing$isSet = true;
    return this;
  }

  static final ParseField OFFSET = new ParseField("offset");
  private double _offset;
  private boolean _offset$isSet;
  public double getOffset() { return this._offset; }
  public HistogramAggregation setOffset(double val) {
    this._offset = val;
    _offset$isSet = true;
    return this;
  }

  static final ParseField ORDER = new ParseField("order");
  private HistogramOrder _order;
  public HistogramOrder getOrder() { return this._order; }
  public HistogramAggregation setOrder(HistogramOrder val) { this._order = val; return this; }

  static final ParseField SCRIPT = new ParseField("script");
  private Script _script;
  public Script getScript() { return this._script; }
  public HistogramAggregation setScript(Script val) { this._script = val; return this; }

  static final ParseField FORMAT = new ParseField("format");
  private String _format;
  public String getFormat() { return this._format; }
  public HistogramAggregation setFormat(String val) { this._format = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_extendedBounds != null) {
      builder.field(EXTENDED_BOUNDS.getPreferredName());
      _extendedBounds.toXContent(builder, params);
    }
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_interval$isSet) {
      builder.field(INTERVAL.getPreferredName(), _interval);
    }
    if (_minDocCount$isSet) {
      builder.field(MIN_DOC_COUNT.getPreferredName(), _minDocCount);
    }
    if (_missing$isSet) {
      builder.field(MISSING.getPreferredName(), _missing);
    }
    if (_offset$isSet) {
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
    if (_format != null) {
      builder.field(FORMAT.getPreferredName(), _format);
    }
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
    PARSER.declareString(HistogramAggregation::setField, FIELD);
    PARSER.declareDouble(HistogramAggregation::setInterval, INTERVAL);
    PARSER.declareInt(HistogramAggregation::setMinDocCount, MIN_DOC_COUNT);
    PARSER.declareDouble(HistogramAggregation::setMissing, MISSING);
    PARSER.declareDouble(HistogramAggregation::setOffset, OFFSET);
    PARSER.declareObject(HistogramAggregation::setOrder, (p, t) -> HistogramOrder.PARSER.apply(p, t), ORDER);
    PARSER.declareObject(HistogramAggregation::setScript, (p, t) -> Script.PARSER.apply(p, t), SCRIPT);
    PARSER.declareString(HistogramAggregation::setFormat, FORMAT);
  }

}
