
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

public class HourlySchedule  implements XContentable<HourlySchedule> {
  
  static final ParseField MINUTE = new ParseField("minute");
  private List<Integer> _minute;
  public List<Integer> getMinute() { return this._minute; }
  public HourlySchedule setMinute(List<Integer> val) { this._minute = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_minute != null) {
      builder.array(MINUTE.getPreferredName(), _minute);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public HourlySchedule fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return HourlySchedule.PARSER.apply(parser, null);
  }

  public static final ObjectParser<HourlySchedule, Void> PARSER =
    new ObjectParser<>(HourlySchedule.class.getName(), false, HourlySchedule::new);

  static {
    PARSER.declareIntArray(HourlySchedule::setMinute, MINUTE);
  }

}
