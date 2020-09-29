
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
import org.elasticsearch.common_abstractions.request.*;

public class GetCalendarEventsRequest extends RequestBase<GetCalendarEventsRequest> implements XContentable<GetCalendarEventsRequest> {
  
  static final ParseField END = new ParseField("end");
  private Date _end;
  public Date getEnd() { return this._end; }
  public GetCalendarEventsRequest setEnd(Date val) { this._end = val; return this; }

  static final ParseField JOB_ID = new ParseField("job_id");
  private String _jobId;
  public String getJobId() { return this._jobId; }
  public GetCalendarEventsRequest setJobId(String val) { this._jobId = val; return this; }

  static final ParseField START = new ParseField("start");
  private String _start;
  public String getStart() { return this._start; }
  public GetCalendarEventsRequest setStart(String val) { this._start = val; return this; }

  static final ParseField FROM = new ParseField("from");
  private int _from;
  private boolean _from$isSet;
  public int getFrom() { return this._from; }
  public GetCalendarEventsRequest setFrom(int val) {
    this._from = val;
    _from$isSet = true;
    return this;
  }

  static final ParseField SIZE = new ParseField("size");
  private int _size;
  private boolean _size$isSet;
  public int getSize() { return this._size; }
  public GetCalendarEventsRequest setSize(int val) {
    this._size = val;
    _size$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_end != null) {
      builder.field(END.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_end.toInstant()));
    }
    if (_jobId != null) {
      builder.field(JOB_ID.getPreferredName(), _jobId);
    }
    if (_start != null) {
      builder.field(START.getPreferredName(), _start);
    }
    if (_from$isSet) {
      builder.field(FROM.getPreferredName(), _from);
    }
    if (_size$isSet) {
      builder.field(SIZE.getPreferredName(), _size);
    }
  }

  @Override
  public GetCalendarEventsRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetCalendarEventsRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetCalendarEventsRequest, Void> PARSER =
    new ObjectParser<>(GetCalendarEventsRequest.class.getName(), false, GetCalendarEventsRequest::new);

  static {
    PARSER.declareObject(GetCalendarEventsRequest::setEnd, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), END);
    PARSER.declareString(GetCalendarEventsRequest::setJobId, JOB_ID);
    PARSER.declareString(GetCalendarEventsRequest::setStart, START);
    PARSER.declareInt(GetCalendarEventsRequest::setFrom, FROM);
    PARSER.declareInt(GetCalendarEventsRequest::setSize, SIZE);
  }

}
