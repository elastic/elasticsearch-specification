
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

public class ScheduleTriggerEvent  implements XContentable<ScheduleTriggerEvent> {
  
  static final ParseField SCHEDULED_TIME = new ParseField("scheduled_time");
  private Either<Date, String> _scheduledTime;
  public Either<Date, String> getScheduledTime() { return this._scheduledTime; }
  public ScheduleTriggerEvent setScheduledTime(Either<Date, String> val) { this._scheduledTime = val; return this; }


  static final ParseField TRIGGERED_TIME = new ParseField("triggered_time");
  private Either<Date, String> _triggeredTime;
  public Either<Date, String> getTriggeredTime() { return this._triggeredTime; }
  public ScheduleTriggerEvent setTriggeredTime(Either<Date, String> val) { this._triggeredTime = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_scheduledTime != null) {
      builder.field(SCHEDULED_TIME.getPreferredName());
      _scheduledTime.map(r -> builder.value(DateTimeFormatter.ISO_DATE.format(r.toInstant())), builder::value);
    }
    if (_triggeredTime != null) {
      builder.field(TRIGGERED_TIME.getPreferredName());
      _triggeredTime.map(r -> builder.value(DateTimeFormatter.ISO_DATE.format(r.toInstant())), builder::value);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ScheduleTriggerEvent fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ScheduleTriggerEvent.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ScheduleTriggerEvent, Void> PARSER =
    new ObjectParser<>(ScheduleTriggerEvent.class.getName(), false, ScheduleTriggerEvent::new);

  static {
    PARSER.declareObject(ScheduleTriggerEvent::setScheduledTime, (p, t) ->  new Either<Date, String>() /* TODO UnionOf */, SCHEDULED_TIME);
    PARSER.declareObject(ScheduleTriggerEvent::setTriggeredTime, (p, t) ->  new Either<Date, String>() /* TODO UnionOf */, TRIGGERED_TIME);
  }

}
