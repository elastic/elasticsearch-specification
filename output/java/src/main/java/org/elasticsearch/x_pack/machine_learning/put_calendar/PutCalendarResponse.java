
package org.elasticsearch.x_pack.machine_learning.put_calendar;

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


public class PutCalendarResponse  implements XContentable<PutCalendarResponse> {
  
  static final ParseField CALENDAR_ID = new ParseField("calendar_id");
  private String _calendarId;
  public String getCalendarId() { return this._calendarId; }
  public PutCalendarResponse setCalendarId(String val) { this._calendarId = val; return this; }


  static final ParseField DESCRIPTION = new ParseField("description");
  private String _description;
  public String getDescription() { return this._description; }
  public PutCalendarResponse setDescription(String val) { this._description = val; return this; }


  static final ParseField JOB_IDS = new ParseField("job_ids");
  private List<String> _jobIds;
  public List<String> getJobIds() { return this._jobIds; }
  public PutCalendarResponse setJobIds(List<String> val) { this._jobIds = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_calendarId != null) {
      builder.field(CALENDAR_ID.getPreferredName(), _calendarId);
    }
    if (_description != null) {
      builder.field(DESCRIPTION.getPreferredName(), _description);
    }
    if (_jobIds != null) {
      builder.array(JOB_IDS.getPreferredName(), _jobIds);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public PutCalendarResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PutCalendarResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PutCalendarResponse, Void> PARSER =
    new ObjectParser<>(PutCalendarResponse.class.getName(), false, PutCalendarResponse::new);

  static {
    PARSER.declareString(PutCalendarResponse::setCalendarId, CALENDAR_ID);
    PARSER.declareString(PutCalendarResponse::setDescription, DESCRIPTION);
    PARSER.declareStringArray(PutCalendarResponse::setJobIds, JOB_IDS);
  }

}
