
package org.elasticsearch.x_pack.security.authenticate;

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
import org.elasticsearch.x_pack.security.authenticate.*;

public class AuthenticateResponse  implements XContentable<AuthenticateResponse> {
  
  static final ParseField EMAIL = new ParseField("email");
  private String _email;
  public String getEmail() { return this._email; }
  public AuthenticateResponse setEmail(String val) { this._email = val; return this; }


  static final ParseField FULL_NAME = new ParseField("full_name");
  private String _fullName;
  public String getFullName() { return this._fullName; }
  public AuthenticateResponse setFullName(String val) { this._fullName = val; return this; }


  static final ParseField METADATA = new ParseField("metadata");
  private NamedContainer<String, Object> _metadata;
  public NamedContainer<String, Object> getMetadata() { return this._metadata; }
  public AuthenticateResponse setMetadata(NamedContainer<String, Object> val) { this._metadata = val; return this; }


  static final ParseField ROLES = new ParseField("roles");
  private List<String> _roles;
  public List<String> getRoles() { return this._roles; }
  public AuthenticateResponse setRoles(List<String> val) { this._roles = val; return this; }


  static final ParseField USERNAME = new ParseField("username");
  private String _username;
  public String getUsername() { return this._username; }
  public AuthenticateResponse setUsername(String val) { this._username = val; return this; }


  static final ParseField AUTHENTICATION_REALM = new ParseField("authentication_realm");
  private RealmInfo _authenticationRealm;
  public RealmInfo getAuthenticationRealm() { return this._authenticationRealm; }
  public AuthenticateResponse setAuthenticationRealm(RealmInfo val) { this._authenticationRealm = val; return this; }


  static final ParseField LOOKUP_REALM = new ParseField("lookup_realm");
  private RealmInfo _lookupRealm;
  public RealmInfo getLookupRealm() { return this._lookupRealm; }
  public AuthenticateResponse setLookupRealm(RealmInfo val) { this._lookupRealm = val; return this; }


  
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
    if (_authenticationRealm != null) {
      builder.field(AUTHENTICATION_REALM.getPreferredName());
      _authenticationRealm.toXContent(builder, params);
    }
    if (_lookupRealm != null) {
      builder.field(LOOKUP_REALM.getPreferredName());
      _lookupRealm.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public AuthenticateResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return AuthenticateResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<AuthenticateResponse, Void> PARSER =
    new ObjectParser<>(AuthenticateResponse.class.getName(), false, AuthenticateResponse::new);

  static {
    PARSER.declareString(AuthenticateResponse::setEmail, EMAIL);
    PARSER.declareString(AuthenticateResponse::setFullName, FULL_NAME);
    PARSER.declareObject(AuthenticateResponse::setMetadata, (p, t) -> new NamedContainer<>(n -> () -> n,XContentParser::binaryValue), METADATA);
    PARSER.declareStringArray(AuthenticateResponse::setRoles, ROLES);
    PARSER.declareString(AuthenticateResponse::setUsername, USERNAME);
    PARSER.declareObject(AuthenticateResponse::setAuthenticationRealm, (p, t) -> RealmInfo.PARSER.apply(p, t), AUTHENTICATION_REALM);
    PARSER.declareObject(AuthenticateResponse::setLookupRealm, (p, t) -> RealmInfo.PARSER.apply(p, t), LOOKUP_REALM);
  }

}
