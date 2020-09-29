
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
import org.elasticsearch.x_pack.machine_learning.get_calendars.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.common_abstractions.response.*;

public class GetCalendarsResponse extends ResponseBase<GetCalendarsResponse> implements XContentable<GetCalendarsResponse> {
  
  static final ParseField CALENDARS = new ParseField("calendars");
  private List<Calendar> _calendars;
  public List<Calendar> getCalendars() { return this._calendars; }
  public GetCalendarsResponse setCalendars(List<Calendar> val) { this._calendars = val; return this; }

  static final ParseField COUNT = new ParseField("count");
  private long _count;
  private boolean _count$isSet;
  public long getCount() { return this._count; }
  public GetCalendarsResponse setCount(long val) {
    this._count = val;
    _count$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_calendars != null) {
      builder.array(CALENDARS.getPreferredName(), _calendars);
    }
    if (_count$isSet) {
      builder.field(COUNT.getPreferredName(), _count);
    }
  }

  @Override
  public GetCalendarsResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetCalendarsResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetCalendarsResponse, Void> PARSER =
    new ObjectParser<>(GetCalendarsResponse.class.getName(), false, GetCalendarsResponse::new);

  static {
    PARSER.declareObjectArray(GetCalendarsResponse::setCalendars, (p, t) -> Calendar.PARSER.apply(p, t), CALENDARS);
    PARSER.declareLong(GetCalendarsResponse::setCount, COUNT);
  }

}
