
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


public class XPackUser  implements XContentable<XPackUser> {
  
  static final ParseField EMAIL = new ParseField("email");
  private String _email;
  public String getEmail() { return this._email; }
  public XPackUser setEmail(String val) { this._email = val; return this; }


  static final ParseField FULL_NAME = new ParseField("full_name");
  private String _fullName;
  public String getFullName() { return this._fullName; }
  public XPackUser setFullName(String val) { this._fullName = val; return this; }


  static final ParseField METADATA = new ParseField("metadata");
  private NamedContainer<String, Object> _metadata;
  public NamedContainer<String, Object> getMetadata() { return this._metadata; }
  public XPackUser setMetadata(NamedContainer<String, Object> val) { this._metadata = val; return this; }


  static final ParseField ROLES = new ParseField("roles");
  private List<String> _roles;
  public List<String> getRoles() { return this._roles; }
  public XPackUser setRoles(List<String> val) { this._roles = val; return this; }


  static final ParseField USERNAME = new ParseField("username");
  private String _username;
  public String getUsername() { return this._username; }
  public XPackUser setUsername(String val) { this._username = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_email != null) {
      builder.field(EMAIL.getPreferredName(), _email);
    }
    if (_fullName != null) {
      builder.field(FULL_NAME.getPreferredName(), _fullName);
    }
    if (_metadata != null) {
      builder.field(METADATA.getPreferredName());
      _metadata.toXContent(builder, params);
    }
    if (_roles != null) {
      builder.array(ROLES.getPreferredName(), _roles);
    }
    if (_username != null) {
      builder.field(USERNAME.getPreferredName(), _username);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public XPackUser fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return XPackUser.PARSER.apply(parser, null);
  }

  public static final ObjectParser<XPackUser, Void> PARSER =
    new ObjectParser<>(XPackUser.class.getName(), false, XPackUser::new);

  static {
    PARSER.declareString(XPackUser::setEmail, EMAIL);
    PARSER.declareString(XPackUser::setFullName, FULL_NAME);
    PARSER.declareObject(XPackUser::setMetadata, (p, t) -> new NamedContainer<>(n -> () -> n,XContentParser::binaryValue), METADATA);
    PARSER.declareStringArray(XPackUser::setRoles, ROLES);
    PARSER.declareString(XPackUser::setUsername, USERNAME);
  }

}
