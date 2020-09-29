
package org.elasticsearch.x_pack.machine_learning.get_calendar_events;

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
import org.elasticsearch.x_pack.machine_learning.post_calendar_events.*;
import org.elasticsearch.common_abstractions.response.*;

public class GetCalendarEventsResponse extends ResponseBase<GetCalendarEventsResponse> implements XContentable<GetCalendarEventsResponse> {
  
  static final ParseField COUNT = new ParseField("count");
  private int _count;
  private boolean _count$isSet;
  public int getCount() { return this._count; }
  public GetCalendarEventsResponse setCount(int val) {
    this._count = val;
    _count$isSet = true;
    return this;
  }

  static final ParseField EVENTS = new ParseField("events");
  private List<ScheduledEvent> _events;
  public List<ScheduledEvent> getEvents() { return this._events; }
  public GetCalendarEventsResponse setEvents(List<ScheduledEvent> val) { this._events = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_count$isSet) {
      builder.field(COUNT.getPreferredName(), _count);
    }
    if (_events != null) {
      builder.array(EVENTS.getPreferredName(), _events);
    }
  }

  @Override
  public GetCalendarEventsResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetCalendarEventsResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetCalendarEventsResponse, Void> PARSER =
    new ObjectParser<>(GetCalendarEventsResponse.class.getName(), false, GetCalendarEventsResponse::new);

  static {
    PARSER.declareInt(GetCalendarEventsResponse::setCount, COUNT);
    PARSER.declareObjectArray(GetCalendarEventsResponse::setEvents, (p, t) -> ScheduledEvent.PARSER.apply(p, t), EVENTS);
  }

}
