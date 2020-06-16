
package org.elasticsearch.x_pack.machine_learning.get_calendars;

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
import org.elasticsearch.x_pack.machine_learning.job.*;

public class GetCalendarsRequest  implements XContentable<GetCalendarsRequest> {
  
  static final ParseField PAGE = new ParseField("page");
  private Page _page;
  public Page getPage() { return this._page; }
  public GetCalendarsRequest setPage(Page val) { this._page = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_page != null) {
      builder.field(PAGE.getPreferredName());
      _page.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
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
