
package org.elasticsearch.x_pack.machine_learning.delete_calendar_job;

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

public class DeleteCalendarJobResponse  implements XContentable<DeleteCalendarJobResponse> {
  
  static final ParseField CALENDAR_ID = new ParseField("calendar_id");
  private String _calendarId;
  public String getCalendarId() { return this._calendarId; }
  public DeleteCalendarJobResponse setCalendarId(String val) { this._calendarId = val; return this; }


  static final ParseField DESCRIPTION = new ParseField("description");
  private String _description;
  public String getDescription() { return this._description; }
  public DeleteCalendarJobResponse setDescription(String val) { this._description = val; return this; }


  static final ParseField JOB_IDS = new ParseField("job_ids");
  private List<Id> _jobIds;
  public List<Id> getJobIds() { return this._jobIds; }
  public DeleteCalendarJobResponse setJobIds(List<Id> val) { this._jobIds = val; return this; }


  
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
  public DeleteCalendarJobResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeleteCalendarJobResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeleteCalendarJobResponse, Void> PARSER =
    new ObjectParser<>(DeleteCalendarJobResponse.class.getName(), false, DeleteCalendarJobResponse::new);

  static {
    PARSER.declareString(DeleteCalendarJobResponse::setCalendarId, CALENDAR_ID);
    PARSER.declareString(DeleteCalendarJobResponse::setDescription, DESCRIPTION);
    PARSER.declareObjectArray(DeleteCalendarJobResponse::setJobIds, (p, t) -> Id.createFrom(p), JOB_IDS);
  }

}
