
package org.elasticsearch.x_pack.security.api_key.get_api_key;

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
import org.elasticsearch.internal.*;

public class ApiKeys  implements XContentable<ApiKeys> {
  
  static final ParseField CREATION = new ParseField("creation");
  private Date _creation;
  public Date getCreation() { return this._creation; }
  public ApiKeys setCreation(Date val) { this._creation = val; return this; }


  static final ParseField EXPIRATION = new ParseField("expiration");
  private Date _expiration;
  public Date getExpiration() { return this._expiration; }
  public ApiKeys setExpiration(Date val) { this._expiration = val; return this; }


  static final ParseField ID = new ParseField("id");
  private String _id;
  public String getId() { return this._id; }
  public ApiKeys setId(String val) { this._id = val; return this; }


  static final ParseField INVALIDATED = new ParseField("invalidated");
  private Boolean _invalidated;
  public Boolean getInvalidated() { return this._invalidated; }
  public ApiKeys setInvalidated(Boolean val) { this._invalidated = val; return this; }


  static final ParseField NAME = new ParseField("name");
  private String _name;
  public String getName() { return this._name; }
  public ApiKeys setName(String val) { this._name = val; return this; }


  static final ParseField REALM = new ParseField("realm");
  private String _realm;
  public String getRealm() { return this._realm; }
  public ApiKeys setRealm(String val) { this._realm = val; return this; }


  static final ParseField USERNAME = new ParseField("username");
  private String _username;
  public String getUsername() { return this._username; }
  public ApiKeys setUsername(String val) { this._username = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_creation != null) {
      builder.field(CREATION.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_creation.toInstant()));
    }
    if (_expiration != null) {
      builder.field(EXPIRATION.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_expiration.toInstant()));
    }
    if (_id != null) {
      builder.field(ID.getPreferredName(), _id);
    }
    if (_invalidated != null) {
      builder.field(INVALIDATED.getPreferredName(), _invalidated);
    }
    if (_name != null) {
      builder.field(NAME.getPreferredName(), _name);
    }
    if (_realm != null) {
      builder.field(REALM.getPreferredName(), _realm);
    }
    if (_username != null) {
      builder.field(USERNAME.getPreferredName(), _username);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ApiKeys fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ApiKeys.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ApiKeys, Void> PARSER =
    new ObjectParser<>(ApiKeys.class.getName(), false, ApiKeys::new);

  static {
    PARSER.declareObject(ApiKeys::setCreation, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), CREATION);
    PARSER.declareObject(ApiKeys::setExpiration, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), EXPIRATION);
    PARSER.declareString(ApiKeys::setId, ID);
    PARSER.declareBoolean(ApiKeys::setInvalidated, INVALIDATED);
    PARSER.declareString(ApiKeys::setName, NAME);
    PARSER.declareString(ApiKeys::setRealm, REALM);
    PARSER.declareString(ApiKeys::setUsername, USERNAME);
  }

}
