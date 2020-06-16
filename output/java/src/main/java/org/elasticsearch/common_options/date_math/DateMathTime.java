
package org.elasticsearch.common_options.date_math;

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
import org.elasticsearch.common_options.date_math.*;

public class DateMathTime  implements XContentable<DateMathTime> {
  
  static final ParseField FACTOR = new ParseField("factor");
  private Integer _factor;
  public Integer getFactor() { return this._factor; }
  public DateMathTime setFactor(Integer val) { this._factor = val; return this; }


  static final ParseField INTERVAL = new ParseField("interval");
  private DateMathTimeUnit _interval;
  public DateMathTimeUnit getInterval() { return this._interval; }
  public DateMathTime setInterval(DateMathTimeUnit val) { this._interval = val; return this; }


  
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
    builder.endObject();
    return builder;
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
