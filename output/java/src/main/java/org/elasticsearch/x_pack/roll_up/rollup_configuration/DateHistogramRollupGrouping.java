
package org.elasticsearch.x_pack.roll_up.rollup_configuration;

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
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.common_abstractions.infer.field.*;

public class DateHistogramRollupGrouping  implements XContentable<DateHistogramRollupGrouping> {
  
  static final ParseField DELAY = new ParseField("delay");
  private Time _delay;
  public Time getDelay() { return this._delay; }
  public DateHistogramRollupGrouping setDelay(Time val) { this._delay = val; return this; }


  static final ParseField FIELD = new ParseField("field");
  private Field _field;
  public Field getField() { return this._field; }
  public DateHistogramRollupGrouping setField(Field val) { this._field = val; return this; }


  static final ParseField FORMAT = new ParseField("format");
  private String _format;
  public String getFormat() { return this._format; }
  public DateHistogramRollupGrouping setFormat(String val) { this._format = val; return this; }


  static final ParseField INTERVAL = new ParseField("interval");
  private Time _interval;
  public Time getInterval() { return this._interval; }
  public DateHistogramRollupGrouping setInterval(Time val) { this._interval = val; return this; }


  static final ParseField TIME_ZONE = new ParseField("time_zone");
  private String _timeZone;
  public String getTimeZone() { return this._timeZone; }
  public DateHistogramRollupGrouping setTimeZone(String val) { this._timeZone = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_delay != null) {
      builder.field(DELAY.getPreferredName());
      _delay.toXContent(builder, params);
    }
    if (_field != null) {
      builder.field(FIELD.getPreferredName());
      _field.toXContent(builder, params);
    }
    if (_format != null) {
      builder.field(FORMAT.getPreferredName(), _format);
    }
    if (_interval != null) {
      builder.field(INTERVAL.getPreferredName());
      _interval.toXContent(builder, params);
    }
    if (_timeZone != null) {
      builder.field(TIME_ZONE.getPreferredName(), _timeZone);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public DateHistogramRollupGrouping fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DateHistogramRollupGrouping.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DateHistogramRollupGrouping, Void> PARSER =
    new ObjectParser<>(DateHistogramRollupGrouping.class.getName(), false, DateHistogramRollupGrouping::new);

  static {
    PARSER.declareObject(DateHistogramRollupGrouping::setDelay, (p, t) -> Time.PARSER.apply(p, t), DELAY);
    PARSER.declareObject(DateHistogramRollupGrouping::setField, (p, t) -> Field.createFrom(p), FIELD);
    PARSER.declareString(DateHistogramRollupGrouping::setFormat, FORMAT);
    PARSER.declareObject(DateHistogramRollupGrouping::setInterval, (p, t) -> Time.PARSER.apply(p, t), INTERVAL);
    PARSER.declareString(DateHistogramRollupGrouping::setTimeZone, TIME_ZONE);
  }

}
