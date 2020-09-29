
package org.elasticsearch.x_pack.machine_learning.get_calendars;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;


public class Calendar  implements XContentable<Calendar> {
  
  static final ParseField CALENDAR_ID = new ParseField("calendar_id");
  private String _calendarId;
  public String getCalendarId() { return this._calendarId; }
  public Calendar setCalendarId(String val) { this._calendarId = val; return this; }

  static final ParseField DESCRIPTION = new ParseField("description");
  private String _description;
  public String getDescription() { return this._description; }
  public Calendar setDescription(String val) { this._description = val; return this; }

  static final ParseField JOB_IDS = new ParseField("job_ids");
  private List<String> _jobIds;
  public List<String> getJobIds() { return this._jobIds; }
  public Calendar setJobIds(List<String> val) { this._jobIds = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_calendarId != null) {
      builder.field(CALENDAR_ID.getPreferredName(), _calendarId);
    }
    if (_description != null) {
      builder.field(DESCRIPTION.getPreferredName(), _description);
    }
    if (_jobIds != null) {
      builder.array(JOB_IDS.getPreferredName(), _jobIds);
    }
  }

  @Override
  public Calendar fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return Calendar.PARSER.apply(parser, null);
  }

  public static final ObjectParser<Calendar, Void> PARSER =
    new ObjectParser<>(Calendar.class.getName(), false, Calendar::new);

  static {
    PARSER.declareString(Calendar::setCalendarId, CALENDAR_ID);
    PARSER.declareString(Calendar::setDescription, DESCRIPTION);
    PARSER.declareStringArray(Calendar::setJobIds, JOB_IDS);
  }

}
