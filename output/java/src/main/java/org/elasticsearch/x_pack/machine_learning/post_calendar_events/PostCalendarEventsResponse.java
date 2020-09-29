
package org.elasticsearch.x_pack.machine_learning.post_calendar_events;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.x_pack.machine_learning.post_calendar_events.*;
import org.elasticsearch.common_abstractions.response.*;

public class PostCalendarEventsResponse extends ResponseBase<PostCalendarEventsResponse> implements XContentable<PostCalendarEventsResponse> {
  
  static final ParseField EVENTS = new ParseField("events");
  private List<ScheduledEvent> _events;
  public List<ScheduledEvent> getEvents() { return this._events; }
  public PostCalendarEventsResponse setEvents(List<ScheduledEvent> val) { this._events = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_events != null) {
      builder.array(EVENTS.getPreferredName(), _events);
    }
  }

  @Override
  public PostCalendarEventsResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PostCalendarEventsResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PostCalendarEventsResponse, Void> PARSER =
    new ObjectParser<>(PostCalendarEventsResponse.class.getName(), false, PostCalendarEventsResponse::new);

  static {
    PARSER.declareObjectArray(PostCalendarEventsResponse::setEvents, (p, t) -> ScheduledEvent.PARSER.apply(p, t), EVENTS);
  }

}
