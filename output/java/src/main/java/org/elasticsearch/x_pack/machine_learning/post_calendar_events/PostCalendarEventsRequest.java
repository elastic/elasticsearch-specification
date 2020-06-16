
package org.elasticsearch.x_pack.machine_learning.post_calendar_events;

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
import org.elasticsearch.x_pack.machine_learning.post_calendar_events.*;

public class PostCalendarEventsRequest  implements XContentable<PostCalendarEventsRequest> {
  
  static final ParseField EVENTS = new ParseField("events");
  private List<ScheduledEvent> _events;
  public List<ScheduledEvent> getEvents() { return this._events; }
  public PostCalendarEventsRequest setEvents(List<ScheduledEvent> val) { this._events = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_events != null) {
      builder.array(EVENTS.getPreferredName(), _events);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public PostCalendarEventsRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PostCalendarEventsRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PostCalendarEventsRequest, Void> PARSER =
    new ObjectParser<>(PostCalendarEventsRequest.class.getName(), false, PostCalendarEventsRequest::new);

  static {
    PARSER.declareObjectArray(PostCalendarEventsRequest::setEvents, (p, t) -> ScheduledEvent.PARSER.apply(p, t), EVENTS);
  }

}
