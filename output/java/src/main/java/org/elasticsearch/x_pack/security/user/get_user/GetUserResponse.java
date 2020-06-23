
package org.elasticsearch.x_pack.security.user.get_user;

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
import org.elasticsearch.x_pack.security.user.get_user.*;
import org.elasticsearch.common_abstractions.response.*;

public class GetUserResponse extends DictionaryResponseBase<String, XPackUser> implements XContentable<GetUserResponse> {
  
  static final ParseField USERS = new ParseField("users");
  private NamedContainer<String, XPackUser> _users;
  public NamedContainer<String, XPackUser> getUsers() { return this._users; }
  public GetUserResponse setUsers(NamedContainer<String, XPackUser> val) { this._users = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_users != null) {
      builder.field(USERS.getPreferredName());
      _users.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public GetUserResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetUserResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetUserResponse, Void> PARSER =
    new ObjectParser<>(GetUserResponse.class.getName(), false, GetUserResponse::new);

  static {
    PARSER.declareObject(GetUserResponse::setUsers, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> XPackUser.PARSER.apply(pp, null)), USERS);
  }

}
