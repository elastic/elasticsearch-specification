
package org.elasticsearch.x_pack.security.user.get_user_access_token;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.common_abstractions.response.*;

public class GetUserAccessTokenResponse extends ResponseBase<GetUserAccessTokenResponse> implements XContentable<GetUserAccessTokenResponse> {
  
  static final ParseField ACCESS_TOKEN = new ParseField("access_token");
  private String _accessToken;
  public String getAccessToken() { return this._accessToken; }
  public GetUserAccessTokenResponse setAccessToken(String val) { this._accessToken = val; return this; }

  static final ParseField EXPIRES_IN = new ParseField("expires_in");
  private long _expiresIn;
  private boolean _expiresIn$isSet;
  public long getExpiresIn() { return this._expiresIn; }
  public GetUserAccessTokenResponse setExpiresIn(long val) {
    this._expiresIn = val;
    _expiresIn$isSet = true;
    return this;
  }

  static final ParseField SCOPE = new ParseField("scope");
  private String _scope;
  public String getScope() { return this._scope; }
  public GetUserAccessTokenResponse setScope(String val) { this._scope = val; return this; }

  static final ParseField TYPE = new ParseField("type");
  private String _type;
  public String getType() { return this._type; }
  public GetUserAccessTokenResponse setType(String val) { this._type = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_accessToken != null) {
      builder.field(ACCESS_TOKEN.getPreferredName(), _accessToken);
    }
    if (_expiresIn$isSet) {
      builder.field(EXPIRES_IN.getPreferredName(), _expiresIn);
    }
    if (_scope != null) {
      builder.field(SCOPE.getPreferredName(), _scope);
    }
    if (_type != null) {
      builder.field(TYPE.getPreferredName(), _type);
    }
  }

  @Override
  public GetUserAccessTokenResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetUserAccessTokenResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetUserAccessTokenResponse, Void> PARSER =
    new ObjectParser<>(GetUserAccessTokenResponse.class.getName(), false, GetUserAccessTokenResponse::new);

  static {
    PARSER.declareString(GetUserAccessTokenResponse::setAccessToken, ACCESS_TOKEN);
    PARSER.declareLong(GetUserAccessTokenResponse::setExpiresIn, EXPIRES_IN);
    PARSER.declareString(GetUserAccessTokenResponse::setScope, SCOPE);
    PARSER.declareString(GetUserAccessTokenResponse::setType, TYPE);
  }

}
