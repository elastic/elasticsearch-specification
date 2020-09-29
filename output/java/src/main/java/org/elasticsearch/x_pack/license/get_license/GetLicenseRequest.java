
package org.elasticsearch.x_pack.license.get_license;

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

public class GetLicenseRequest extends RequestBase<GetLicenseRequest> implements XContentable<GetLicenseRequest> {
  
  static final ParseField ACCEPT_ENTERPRISE = new ParseField("accept_enterprise");
  private Boolean _acceptEnterprise;
  public Boolean getAcceptEnterprise() { return this._acceptEnterprise; }
  public GetLicenseRequest setAcceptEnterprise(Boolean val) { this._acceptEnterprise = val; return this; }

  static final ParseField LOCAL = new ParseField("local");
  private Boolean _local;
  public Boolean getLocal() { return this._local; }
  public GetLicenseRequest setLocal(Boolean val) { this._local = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_acceptEnterprise != null) {
      builder.field(ACCEPT_ENTERPRISE.getPreferredName(), _acceptEnterprise);
    }
    if (_local != null) {
      builder.field(LOCAL.getPreferredName(), _local);
    }
  }

  @Override
  public GetLicenseRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetLicenseRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetLicenseRequest, Void> PARSER =
    new ObjectParser<>(GetLicenseRequest.class.getName(), false, GetLicenseRequest::new);

  static {
    PARSER.declareBoolean(GetLicenseRequest::setAcceptEnterprise, ACCEPT_ENTERPRISE);
    PARSER.declareBoolean(GetLicenseRequest::setLocal, LOCAL);
  }

}
