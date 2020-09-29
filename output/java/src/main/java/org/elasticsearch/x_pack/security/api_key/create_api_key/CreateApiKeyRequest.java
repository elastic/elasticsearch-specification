
package org.elasticsearch.x_pack.security.api_key.create_api_key;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common.*;
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.x_pack.security.api_key.create_api_key.*;
import org.elasticsearch.common_abstractions.request.*;

public class CreateApiKeyRequest extends RequestBase<CreateApiKeyRequest> implements XContentable<CreateApiKeyRequest> {
  
  static final ParseField REFRESH = new ParseField("refresh");
  private Refresh _refresh;
  public Refresh getRefresh() { return this._refresh; }
  public CreateApiKeyRequest setRefresh(Refresh val) { this._refresh = val; return this; }

  static final ParseField EXPIRATION = new ParseField("expiration");
  private String _expiration;
  public String getExpiration() { return this._expiration; }
  public CreateApiKeyRequest setExpiration(String val) { this._expiration = val; return this; }

  static final ParseField NAME = new ParseField("name");
  private String _name;
  public String getName() { return this._name; }
  public CreateApiKeyRequest setName(String val) { this._name = val; return this; }

  static final ParseField ROLE_DESCRIPTORS = new ParseField("role_descriptors");
  private NamedContainer<String, ApiKeyRole> _roleDescriptors;
  public NamedContainer<String, ApiKeyRole> getRoleDescriptors() { return this._roleDescriptors; }
  public CreateApiKeyRequest setRoleDescriptors(NamedContainer<String, ApiKeyRole> val) { this._roleDescriptors = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_refresh != null) {
      builder.field(REFRESH.getPreferredName());
      _refresh.toXContent(builder, params);
    }
    if (_expiration != null) {
      builder.field(EXPIRATION.getPreferredName(), _expiration);
    }
    if (_name != null) {
      builder.field(NAME.getPreferredName(), _name);
    }
    if (_roleDescriptors != null) {
      builder.field(ROLE_DESCRIPTORS.getPreferredName());
      _roleDescriptors.toXContent(builder, params);
    }
  }

  @Override
  public CreateApiKeyRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CreateApiKeyRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CreateApiKeyRequest, Void> PARSER =
    new ObjectParser<>(CreateApiKeyRequest.class.getName(), false, CreateApiKeyRequest::new);

  static {
    PARSER.declareField(CreateApiKeyRequest::setRefresh, (p, t) -> Refresh.PARSER.apply(p), REFRESH, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareString(CreateApiKeyRequest::setExpiration, EXPIRATION);
    PARSER.declareString(CreateApiKeyRequest::setName, NAME);
    PARSER.declareObject(CreateApiKeyRequest::setRoleDescriptors, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> ApiKeyRole.PARSER.apply(pp, null)), ROLE_DESCRIPTORS);
  }

}
