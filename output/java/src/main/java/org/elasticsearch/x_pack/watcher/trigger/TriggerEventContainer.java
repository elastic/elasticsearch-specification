
package org.elasticsearch.x_pack.watcher.trigger;

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
import org.elasticsearch.x_pack.watcher.schedule.*;

public class TriggerEventContainer  implements XContentable<TriggerEventContainer> {
  
  static final ParseField SCHEDULE = new ParseField("schedule");
  private ScheduleTriggerEvent _schedule;
  public ScheduleTriggerEvent getSchedule() { return this._schedule; }
  public TriggerEventContainer setSchedule(ScheduleTriggerEvent val) { this._schedule = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_schedule != null) {
      builder.field(SCHEDULE.getPreferredName());
      _schedule.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public TriggerEventContainer fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TriggerEventContainer.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TriggerEventContainer, Void> PARSER =
    new ObjectParser<>(TriggerEventContainer.class.getName(), false, TriggerEventContainer::new);

  static {
    PARSER.declareObject(TriggerEventContainer::setSchedule, (p, t) -> ScheduleTriggerEvent.PARSER.apply(p, t), SCHEDULE);
  }

}
