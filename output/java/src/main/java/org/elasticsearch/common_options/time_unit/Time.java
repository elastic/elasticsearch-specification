
package org.elasticsearch.common_options.time_unit;

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
import org.elasticsearch.internal.*;
import org.elasticsearch.common_options.time_unit.*;

public class Time  implements XContentable<Time> {
  
  static final ParseField FACTOR = new ParseField("factor");
  private Double _factor;
  public Double getFactor() { return this._factor; }
  public Time setFactor(Double val) { this._factor = val; return this; }


  static final ParseField INTERVAL = new ParseField("interval");
  private TimeUnit _interval;
  public TimeUnit getInterval() { return this._interval; }
  public Time setInterval(TimeUnit val) { this._interval = val; return this; }


  static final ParseField MILLISECONDS = new ParseField("milliseconds");
  private Double _milliseconds;
  public Double getMilliseconds() { return this._milliseconds; }
  public Time setMilliseconds(Double val) { this._milliseconds = val; return this; }


  static final ParseField MINUS_ONE = new ParseField("minus_one");
  private Time _minusOne;
  public Time getMinusOne() { return this._minusOne; }
  public Time setMinusOne(Time val) { this._minusOne = val; return this; }


  static final ParseField ZERO = new ParseField("zero");
  private Time _zero;
  public Time getZero() { return this._zero; }
  public Time setZero(Time val) { this._zero = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_factor != null) {
      builder.field(FACTOR.getPreferredName(), _factor);
    }
    if (_interval != null) {
      builder.field(INTERVAL.getPreferredName());
      _interval.toXContent(builder, params);
    }
    if (_milliseconds != null) {
      builder.field(MILLISECONDS.getPreferredName(), _milliseconds);
    }
    if (_minusOne != null) {
      builder.field(MINUS_ONE.getPreferredName());
      _minusOne.toXContent(builder, params);
    }
    if (_zero != null) {
      builder.field(ZERO.getPreferredName());
      _zero.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public Time fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return Time.PARSER.apply(parser, null);
  }

  public static final ObjectParser<Time, Void> PARSER =
    new ObjectParser<>(Time.class.getName(), false, Time::new);

  static {
    PARSER.declareDouble(Time::setFactor, FACTOR);
    PARSER.declareField(Time::setInterval, (p, t) -> TimeUnit.PARSER.apply(p), INTERVAL, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareDouble(Time::setMilliseconds, MILLISECONDS);
    PARSER.declareObject(Time::setMinusOne, (p, t) -> Time.PARSER.apply(p, t), MINUS_ONE);
    PARSER.declareObject(Time::setZero, (p, t) -> Time.PARSER.apply(p, t), ZERO);
  }

}
