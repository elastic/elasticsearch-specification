
package org.elasticsearch.x_pack.security.user.enable_user;

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
import org.elasticsearch.common.*;

public class EnableUserRequest  implements XContentable<EnableUserRequest> {
  
  static final ParseField REFRESH = new ParseField("refresh");
  private Refresh _refresh;
  public Refresh getRefresh() { return this._refresh; }
  public EnableUserRequest setRefresh(Refresh val) { this._refresh = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_refresh != null) {
      builder.field(REFRESH.getPreferredName());
      _refresh.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public EnableUserRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return EnableUserRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<EnableUserRequest, Void> PARSER =
    new ObjectParser<>(EnableUserRequest.class.getName(), false, EnableUserRequest::new);

  static {
    PARSER.declareField(EnableUserRequest::setRefresh, (p, t) -> Refresh.PARSER.apply(p), REFRESH, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
