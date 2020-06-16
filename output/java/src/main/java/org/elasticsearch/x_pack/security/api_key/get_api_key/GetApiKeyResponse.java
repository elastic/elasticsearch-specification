
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
import org.elasticsearch.x_pack.security.api_key.get_api_key.*;

public class GetApiKeyResponse  implements XContentable<GetApiKeyResponse> {
  
  static final ParseField API_KEYS = new ParseField("api_keys");
  private List<ApiKeys> _apiKeys;
  public List<ApiKeys> getApiKeys() { return this._apiKeys; }
  public GetApiKeyResponse setApiKeys(List<ApiKeys> val) { this._apiKeys = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_apiKeys != null) {
      builder.array(API_KEYS.getPreferredName(), _apiKeys);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public GetApiKeyResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetApiKeyResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetApiKeyResponse, Void> PARSER =
    new ObjectParser<>(GetApiKeyResponse.class.getName(), false, GetApiKeyResponse::new);

  static {
    PARSER.declareObjectArray(GetApiKeyResponse::setApiKeys, (p, t) -> ApiKeys.PARSER.apply(p, t), API_KEYS);
  }

}
