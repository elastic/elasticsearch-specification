
package org.elasticsearch.x_pack.security.api_key.get_api_key;

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

public class GetApiKeyRequest extends RequestBase<GetApiKeyRequest> implements XContentable<GetApiKeyRequest> {
  
  static final ParseField ID = new ParseField("id");
  private String _id;
  public String getId() { return this._id; }
  public GetApiKeyRequest setId(String val) { this._id = val; return this; }

  static final ParseField NAME = new ParseField("name");
  private String _name;
  public String getName() { return this._name; }
  public GetApiKeyRequest setName(String val) { this._name = val; return this; }

  static final ParseField OWNER = new ParseField("owner");
  private Boolean _owner;
  public Boolean getOwner() { return this._owner; }
  public GetApiKeyRequest setOwner(Boolean val) { this._owner = val; return this; }

  static final ParseField REALM_NAME = new ParseField("realm_name");
  private String _realmName;
  public String getRealmName() { return this._realmName; }
  public GetApiKeyRequest setRealmName(String val) { this._realmName = val; return this; }

  static final ParseField USERNAME = new ParseField("username");
  private String _username;
  public String getUsername() { return this._username; }
  public GetApiKeyRequest setUsername(String val) { this._username = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_id != null) {
      builder.field(ID.getPreferredName(), _id);
    }
    if (_name != null) {
      builder.field(NAME.getPreferredName(), _name);
    }
    if (_owner != null) {
      builder.field(OWNER.getPreferredName(), _owner);
    }
    if (_realmName != null) {
      builder.field(REALM_NAME.getPreferredName(), _realmName);
    }
    if (_username != null) {
      builder.field(USERNAME.getPreferredName(), _username);
    }
  }

  @Override
  public GetApiKeyRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetApiKeyRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetApiKeyRequest, Void> PARSER =
    new ObjectParser<>(GetApiKeyRequest.class.getName(), false, GetApiKeyRequest::new);

  static {
    PARSER.declareString(GetApiKeyRequest::setId, ID);
    PARSER.declareString(GetApiKeyRequest::setName, NAME);
    PARSER.declareBoolean(GetApiKeyRequest::setOwner, OWNER);
    PARSER.declareString(GetApiKeyRequest::setRealmName, REALM_NAME);
    PARSER.declareString(GetApiKeyRequest::setUsername, USERNAME);
  }

}
