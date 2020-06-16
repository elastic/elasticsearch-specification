
package org.elasticsearch.x_pack.security.user.change_password;

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

public class ChangePasswordRequest  implements XContentable<ChangePasswordRequest> {
  
  static final ParseField REFRESH = new ParseField("refresh");
  private Refresh _refresh;
  public Refresh getRefresh() { return this._refresh; }
  public ChangePasswordRequest setRefresh(Refresh val) { this._refresh = val; return this; }


  static final ParseField PASSWORD = new ParseField("password");
  private String _password;
  public String getPassword() { return this._password; }
  public ChangePasswordRequest setPassword(String val) { this._password = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_refresh != null) {
      builder.field(REFRESH.getPreferredName());
      _refresh.toXContent(builder, params);
    }
    if (_password != null) {
      builder.field(PASSWORD.getPreferredName(), _password);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ChangePasswordRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ChangePasswordRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ChangePasswordRequest, Void> PARSER =
    new ObjectParser<>(ChangePasswordRequest.class.getName(), false, ChangePasswordRequest::new);

  static {
    PARSER.declareField(ChangePasswordRequest::setRefresh, (p, t) -> Refresh.PARSER.apply(p), REFRESH, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareString(ChangePasswordRequest::setPassword, PASSWORD);
  }

}
