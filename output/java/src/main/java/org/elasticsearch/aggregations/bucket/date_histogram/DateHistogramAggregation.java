
package org.elasticsearch.aggregations.bucket.date_histogram;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.aggregations.bucket.date_histogram.*;
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.aggregations.bucket.histogram.*;
import org.elasticsearch.common_options.date_math.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.common_options.scripting.*;

public class DateHistogramAggregation  implements XContentable<DateHistogramAggregation> {
  
  static final ParseField CALENDAR_INTERVAL = new ParseField("calendar_interval");
  private Union2<DateInterval, String> _calendarInterval;
  public Union2<DateInterval, String> getCalendarInterval() { return this._calendarInterval; }
  public DateHistogramAggregation setCalendarInterval(Union2<DateInterval, String> val) { this._calendarInterval = val; return this; }

  static final ParseField EXTENDED_BOUNDS = new ParseField("extended_bounds");
  private ExtendedBounds<String> _extendedBounds;
  public ExtendedBounds<String> getExtendedBounds() { return this._extendedBounds; }
  public DateHistogramAggregation setExtendedBounds(ExtendedBounds<String> val) { this._extendedBounds = val; return this; }

  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public DateHistogramAggregation setField(String val) { this._field = val; return this; }

  static final ParseField FIXED_INTERVAL = new ParseField("fixed_interval");
  private Union2<DateInterval, String> _fixedInterval;
  public Union2<DateInterval, String> getFixedInterval() { return this._fixedInterval; }
  public DateHistogramAggregation setFixedInterval(Union2<DateInterval, String> val) { this._fixedInterval = val; return this; }

  static final ParseField FORMAT = new ParseField("format");
  private String _format;
  public String getFormat() { return this._format; }
  public DateHistogramAggregation setFormat(String val) { this._format = val; return this; }

  static final ParseField INTERVAL = new ParseField("interval");
  private Union2<DateInterval, String> _interval;
  public Union2<DateInterval, String> getInterval() { return this._interval; }
  public DateHistogramAggregation setInterval(Union2<DateInterval, String> val) { this._interval = val; return this; }

  static final ParseField MIN_DOC_COUNT = new ParseField("min_doc_count");
  private int _minDocCount;
  private boolean _minDocCount$isSet;
  public int getMinDocCount() { return this._minDocCount; }
  public DateHistogramAggregation setMinDocCount(int val) {
    this._minDocCount = val;
    _minDocCount$isSet = true;
    return this;
  }

  static final ParseField MISSING = new ParseField("missing");
  private Date _missing;
  public Date getMissing() { return this._missing; }
  public DateHistogramAggregation setMissing(Date val) { this._missing = val; return this; }

  static final ParseField OFFSET = new ParseField("offset");
  private String _offset;
  public String getOffset() { return this._offset; }
  public DateHistogramAggregation setOffset(String val) { this._offset = val; return this; }

  static final ParseField ORDER = new ParseField("order");
  private HistogramOrder _order;
  public HistogramOrder getOrder() { return this._order; }
  public DateHistogramAggregation setOrder(HistogramOrder val) { this._order = val; return this; }

  static final ParseField PARAMS = new ParseField("params");
  private NamedContainer<String, Object> _params;
  public NamedContainer<String, Object> getParams() { return this._params; }
  public DateHistogramAggregation setParams(NamedContainer<String, Object> val) { this._params = val; return this; }

  static final ParseField SCRIPT = new ParseField("script");
  private Script _script;
  public Script getScript() { return this._script; }
  public DateHistogramAggregation setScript(Script val) { this._script = val; return this; }

  static final ParseField TIME_ZONE = new ParseField("time_zone");
  private String _timeZone;
  public String getTimeZone() { return this._timeZone; }
  public DateHistogramAggregation setTimeZone(String val) { this._timeZone = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_calendarInterval != null) {
      builder.field(CALENDAR_INTERVAL.getPreferredName());
      _calendarInterval.toXContent(builder, params);
    }
    if (_extendedBounds != null) {
      builder.field(EXTENDED_BOUNDS.getPreferredName());
      _extendedBounds.toXContent(builder, params);
    }
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_fixedInterval != null) {
      builder.field(FIXED_INTERVAL.getPreferredName());
      _fixedInterval.toXContent(builder, params);
    }
    if (_format != null) {
      builder.field(FORMAT.getPreferredName(), _format);
    }
    if (_interval != null) {
      builder.field(INTERVAL.getPreferredName());
      _interval.toXContent(builder, params);
    }
    if (_minDocCount$isSet) {
      builder.field(MIN_DOC_COUNT.getPreferredName(), _minDocCount);
    }
    if (_missing != null) {
      builder.field(MISSING.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_missing.toInstant()));
    }
    if (_offset != null) {
      builder.field(OFFSET.getPreferredName(), _offset);
    }
    if (_order != null) {
      builder.field(ORDER.getPreferredName());
      _order.toXContent(builder, params);
    }
    if (_params != null) {
      builder.field(PARAMS.getPreferredName());
      _params.toXContent(builder, params);
    }
    if (_script != null) {
      builder.field(SCRIPT.getPreferredName());
      _script.toXContent(builder, params);
    }
    if (_timeZone != null) {
      builder.field(TIME_ZONE.getPreferredName(), _timeZone);
    }
  }

  @Override
  public DateHistogramAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DateHistogramAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DateHistogramAggregation, Void> PARSER =
    new ObjectParser<>(DateHistogramAggregation.class.getName(), false, DateHistogramAggregation::new);

  static {
    PARSER.declareObject(DateHistogramAggregation::setCalendarInterval, (p, t) ->  new Union2<DateInterval, String>(), CALENDAR_INTERVAL);
    ExtendedBounds<String> _extendedBounds = new ExtendedBounds<String>();
    PARSER.declareObject(DateHistogramAggregation::setExtendedBounds, (p, t) -> _extendedBounds.PARSER.apply(p, t), EXTENDED_BOUNDS);
    PARSER.declareString(DateHistogramAggregation::setField, FIELD);
    PARSER.declareObject(DateHistogramAggregation::setFixedInterval, (p, t) ->  new Union2<DateInterval, String>(), FIXED_INTERVAL);
    PARSER.declareString(DateHistogramAggregation::setFormat, FORMAT);
    PARSER.declareObject(DateHistogramAggregation::setInterval, (p, t) ->  new Union2<DateInterval, String>(), INTERVAL);
    PARSER.declareInt(DateHistogramAggregation::setMinDocCount, MIN_DOC_COUNT);
    PARSER.declareObject(DateHistogramAggregation::setMissing, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), MISSING);
    PARSER.declareString(DateHistogramAggregation::setOffset, OFFSET);
    PARSER.declareObject(DateHistogramAggregation::setOrder, (p, t) -> HistogramOrder.PARSER.apply(p, t), ORDER);
    PARSER.declareObject(DateHistogramAggregation::setParams, (p, t) -> new NamedContainer<>(n -> () -> n,XContentParser::binaryValue), PARAMS);
    PARSER.declareObject(DateHistogramAggregation::setScript, (p, t) -> Script.PARSER.apply(p, t), SCRIPT);
    PARSER.declareString(DateHistogramAggregation::setTimeZone, TIME_ZONE);
  }

}
