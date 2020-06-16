
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
import org.elasticsearch.common_abstractions.infer.id.*;
import org.elasticsearch.internal.*;

public class ScheduledEvent  implements XContentable<ScheduledEvent> {
  
  static final ParseField CALENDAR_ID = new ParseField("calendar_id");
  private Id _calendarId;
  public Id getCalendarId() { return this._calendarId; }
  public ScheduledEvent setCalendarId(Id val) { this._calendarId = val; return this; }


  static final ParseField DESCRIPTION = new ParseField("description");
  private String _description;
  public String getDescription() { return this._description; }
  public ScheduledEvent setDescription(String val) { this._description = val; return this; }


  static final ParseField START_TIME = new ParseField("start_time");
  private Date _startTime;
  public Date getStartTime() { return this._startTime; }
  public ScheduledEvent setStartTime(Date val) { this._startTime = val; return this; }


  static final ParseField END_TIME = new ParseField("end_time");
  private Date _endTime;
  public Date getEndTime() { return this._endTime; }
  public ScheduledEvent setEndTime(Date val) { this._endTime = val; return this; }


  static final ParseField EVENT_ID = new ParseField("event_id");
  private Id _eventId;
  public Id getEventId() { return this._eventId; }
  public ScheduledEvent setEventId(Id val) { this._eventId = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_calendarId != null) {
      builder.field(CALENDAR_ID.getPreferredName());
      _calendarId.toXContent(builder, params);
    }
    if (_description != null) {
      builder.field(DESCRIPTION.getPreferredName(), _description);
    }
    if (_startTime != null) {
      builder.field(START_TIME.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_startTime.toInstant()));
    }
    if (_endTime != null) {
      builder.field(END_TIME.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_endTime.toInstant()));
    }
    if (_eventId != null) {
      builder.field(EVENT_ID.getPreferredName());
      _eventId.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ScheduledEvent fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ScheduledEvent.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ScheduledEvent, Void> PARSER =
    new ObjectParser<>(ScheduledEvent.class.getName(), false, ScheduledEvent::new);

  static {
    PARSER.declareObject(ScheduledEvent::setCalendarId, (p, t) -> Id.createFrom(p), CALENDAR_ID);
    PARSER.declareString(ScheduledEvent::setDescription, DESCRIPTION);
    PARSER.declareObject(ScheduledEvent::setStartTime, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), START_TIME);
    PARSER.declareObject(ScheduledEvent::setEndTime, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), END_TIME);
    PARSER.declareObject(ScheduledEvent::setEventId, (p, t) -> Id.createFrom(p), EVENT_ID);
  }

}
