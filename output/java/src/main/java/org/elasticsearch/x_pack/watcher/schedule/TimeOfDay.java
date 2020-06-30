
package org.elasticsearch.x_pack.watcher.schedule;

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

public class TimeOfDay  implements XContentable<TimeOfDay> {
  
  static final ParseField HOUR = new ParseField("hour");
  private List<Integer> _hour;
  public List<Integer> getHour() { return this._hour; }
  public TimeOfDay setHour(List<Integer> val) { this._hour = val; return this; }


  static final ParseField MINUTE = new ParseField("minute");
  private List<Integer> _minute;
  public List<Integer> getMinute() { return this._minute; }
  public TimeOfDay setMinute(List<Integer> val) { this._minute = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_hour != null) {
      builder.array(HOUR.getPreferredName(), _hour);
    }
    if (_minute != null) {
      builder.array(MINUTE.getPreferredName(), _minute);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public TimeOfDay fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TimeOfDay.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TimeOfDay, Void> PARSER =
    new ObjectParser<>(TimeOfDay.class.getName(), false, TimeOfDay::new);

  static {
    PARSER.declareIntArray(TimeOfDay::setHour, HOUR);
    PARSER.declareIntArray(TimeOfDay::setMinute, MINUTE);
  }

}
