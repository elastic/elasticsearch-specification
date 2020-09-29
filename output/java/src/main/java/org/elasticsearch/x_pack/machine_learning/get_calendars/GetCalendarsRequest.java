
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
import org.elasticsearch.x_pack.machine_learning.job.*;
import org.elasticsearch.common_abstractions.request.*;

public class GetCalendarsRequest extends RequestBase<GetCalendarsRequest> implements XContentable<GetCalendarsRequest> {
  
  static final ParseField PAGE = new ParseField("page");
  private Page _page;
  public Page getPage() { return this._page; }
  public GetCalendarsRequest setPage(Page val) { this._page = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_page != null) {
      builder.field(PAGE.getPreferredName());
      _page.toXContent(builder, params);
    }
  }

  @Override
  public GetCalendarsRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetCalendarsRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetCalendarsRequest, Void> PARSER =
    new ObjectParser<>(GetCalendarsRequest.class.getName(), false, GetCalendarsRequest::new);

  static {
    PARSER.declareObject(GetCalendarsRequest::setPage, (p, t) -> Page.PARSER.apply(p, t), PAGE);
  }

}
