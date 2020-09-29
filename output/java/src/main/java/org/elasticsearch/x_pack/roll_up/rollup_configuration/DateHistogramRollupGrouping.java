
package org.elasticsearch.x_pack.roll_up.rollup_configuration;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.internal.*;

public class DateHistogramRollupGrouping  implements XContentable<DateHistogramRollupGrouping> {
  
  static final ParseField DELAY = new ParseField("delay");
  private String _delay;
  public String getDelay() { return this._delay; }
  public DateHistogramRollupGrouping setDelay(String val) { this._delay = val; return this; }

  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public DateHistogramRollupGrouping setField(String val) { this._field = val; return this; }

  static final ParseField FORMAT = new ParseField("format");
  private String _format;
  public String getFormat() { return this._format; }
  public DateHistogramRollupGrouping setFormat(String val) { this._format = val; return this; }

  static final ParseField INTERVAL = new ParseField("interval");
  private String _interval;
  public String getInterval() { return this._interval; }
  public DateHistogramRollupGrouping setInterval(String val) { this._interval = val; return this; }

  static final ParseField TIME_ZONE = new ParseField("time_zone");
  private String _timeZone;
  public String getTimeZone() { return this._timeZone; }
  public DateHistogramRollupGrouping setTimeZone(String val) { this._timeZone = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_delay != null) {
      builder.field(DELAY.getPreferredName(), _delay);
    }
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_format != null) {
      builder.field(FORMAT.getPreferredName(), _format);
    }
    if (_interval != null) {
      builder.field(INTERVAL.getPreferredName(), _interval);
    }
    if (_timeZone != null) {
      builder.field(TIME_ZONE.getPreferredName(), _timeZone);
    }
  }

  @Override
  public DateHistogramRollupGrouping fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DateHistogramRollupGrouping.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DateHistogramRollupGrouping, Void> PARSER =
    new ObjectParser<>(DateHistogramRollupGrouping.class.getName(), false, DateHistogramRollupGrouping::new);

  static {
    PARSER.declareString(DateHistogramRollupGrouping::setDelay, DELAY);
    PARSER.declareString(DateHistogramRollupGrouping::setField, FIELD);
    PARSER.declareString(DateHistogramRollupGrouping::setFormat, FORMAT);
    PARSER.declareString(DateHistogramRollupGrouping::setInterval, INTERVAL);
    PARSER.declareString(DateHistogramRollupGrouping::setTimeZone, TIME_ZONE);
  }

}
