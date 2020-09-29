
package org.elasticsearch.x_pack.machine_learning.put_calendar;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_abstractions.request.*;

public class PutCalendarRequest extends RequestBase<PutCalendarRequest> implements XContentable<PutCalendarRequest> {
  
  static final ParseField DESCRIPTION = new ParseField("description");
  private String _description;
  public String getDescription() { return this._description; }
  public PutCalendarRequest setDescription(String val) { this._description = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_description != null) {
      builder.field(DESCRIPTION.getPreferredName(), _description);
    }
  }

  @Override
  public PutCalendarRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PutCalendarRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PutCalendarRequest, Void> PARSER =
    new ObjectParser<>(PutCalendarRequest.class.getName(), false, PutCalendarRequest::new);

  static {
    PARSER.declareString(PutCalendarRequest::setDescription, DESCRIPTION);
  }

}
