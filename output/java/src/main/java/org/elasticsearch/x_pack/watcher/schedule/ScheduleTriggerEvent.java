
package org.elasticsearch.x_pack.watcher.schedule;

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

public class ScheduleTriggerEvent  implements XContentable<ScheduleTriggerEvent> {
  
  static final ParseField SCHEDULED_TIME = new ParseField("scheduled_time");
  private Union2<Date, String> _scheduledTime;
  public Union2<Date, String> getScheduledTime() { return this._scheduledTime; }
  public ScheduleTriggerEvent setScheduledTime(Union2<Date, String> val) { this._scheduledTime = val; return this; }

  static final ParseField TRIGGERED_TIME = new ParseField("triggered_time");
  private Union2<Date, String> _triggeredTime;
  public Union2<Date, String> getTriggeredTime() { return this._triggeredTime; }
  public ScheduleTriggerEvent setTriggeredTime(Union2<Date, String> val) { this._triggeredTime = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_scheduledTime != null) {
      builder.field(SCHEDULED_TIME.getPreferredName());
      _scheduledTime.toXContent(builder, params);
    }
    if (_triggeredTime != null) {
      builder.field(TRIGGERED_TIME.getPreferredName());
      _triggeredTime.toXContent(builder, params);
    }
  }

  @Override
  public ScheduleTriggerEvent fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ScheduleTriggerEvent.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ScheduleTriggerEvent, Void> PARSER =
    new ObjectParser<>(ScheduleTriggerEvent.class.getName(), false, ScheduleTriggerEvent::new);

  static {
    PARSER.declareObject(ScheduleTriggerEvent::setScheduledTime, (p, t) ->  new Union2<Date, String>(), SCHEDULED_TIME);
    PARSER.declareObject(ScheduleTriggerEvent::setTriggeredTime, (p, t) ->  new Union2<Date, String>(), TRIGGERED_TIME);
  }

}
