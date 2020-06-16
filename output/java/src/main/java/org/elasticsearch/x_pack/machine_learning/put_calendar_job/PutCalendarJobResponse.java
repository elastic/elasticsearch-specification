
package org.elasticsearch.x_pack.machine_learning.put_calendar_job;

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


public class PutCalendarJobResponse  implements XContentable<PutCalendarJobResponse> {
  
  static final ParseField CALENDAR_ID = new ParseField("calendar_id");
  private String _calendarId;
  public String getCalendarId() { return this._calendarId; }
  public PutCalendarJobResponse setCalendarId(String val) { this._calendarId = val; return this; }


  static final ParseField DESCRIPTION = new ParseField("description");
  private String _description;
  public String getDescription() { return this._description; }
  public PutCalendarJobResponse setDescription(String val) { this._description = val; return this; }


  static final ParseField JOB_IDS = new ParseField("job_ids");
  private List<String> _jobIds;
  public List<String> getJobIds() { return this._jobIds; }
  public PutCalendarJobResponse setJobIds(List<String> val) { this._jobIds = val; return this; }


  
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
  public PutCalendarJobResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PutCalendarJobResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PutCalendarJobResponse, Void> PARSER =
    new ObjectParser<>(PutCalendarJobResponse.class.getName(), false, PutCalendarJobResponse::new);

  static {
    PARSER.declareString(PutCalendarJobResponse::setCalendarId, CALENDAR_ID);
    PARSER.declareString(PutCalendarJobResponse::setDescription, DESCRIPTION);
    PARSER.declareStringArray(PutCalendarJobResponse::setJobIds, JOB_IDS);
  }

}
