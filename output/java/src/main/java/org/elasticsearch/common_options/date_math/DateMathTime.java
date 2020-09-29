
package org.elasticsearch.common_options.date_math;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.common_options.date_math.*;

public class DateMathTime  implements XContentable<DateMathTime> {
  
  static final ParseField FACTOR = new ParseField("factor");
  private int _factor;
  private boolean _factor$isSet;
  public int getFactor() { return this._factor; }
  public DateMathTime setFactor(int val) {
    this._factor = val;
    _factor$isSet = true;
    return this;
  }

  static final ParseField INTERVAL = new ParseField("interval");
  private DateMathTimeUnit _interval;
  public DateMathTimeUnit getInterval() { return this._interval; }
  public DateMathTime setInterval(DateMathTimeUnit val) { this._interval = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_factor$isSet) {
      builder.field(FACTOR.getPreferredName(), _factor);
    }
    if (_interval != null) {
      builder.field(INTERVAL.getPreferredName());
      _interval.toXContent(builder, params);
    }
  }

  @Override
  public DateMathTime fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DateMathTime.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DateMathTime, Void> PARSER =
    new ObjectParser<>(DateMathTime.class.getName(), false, DateMathTime::new);

  static {
    PARSER.declareInt(DateMathTime::setFactor, FACTOR);
    PARSER.declareField(DateMathTime::setInterval, (p, t) -> DateMathTimeUnit.PARSER.apply(p), INTERVAL, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
