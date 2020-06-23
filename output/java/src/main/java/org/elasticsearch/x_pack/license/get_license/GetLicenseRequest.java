
package org.elasticsearch.x_pack.license.get_license;

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


public class GetLicenseRequest  implements XContentable<GetLicenseRequest> {
  
  static final ParseField ACCEPT_ENTERPRISE = new ParseField("accept_enterprise");
  private Boolean _acceptEnterprise;
  public Boolean getAcceptEnterprise() { return this._acceptEnterprise; }
  public GetLicenseRequest setAcceptEnterprise(Boolean val) { this._acceptEnterprise = val; return this; }


  static final ParseField LOCAL = new ParseField("local");
  private Boolean _local;
  public Boolean getLocal() { return this._local; }
  public GetLicenseRequest setLocal(Boolean val) { this._local = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_acceptEnterprise != null) {
      builder.field(ACCEPT_ENTERPRISE.getPreferredName(), _acceptEnterprise);
    }
    if (_local != null) {
      builder.field(LOCAL.getPreferredName(), _local);
    }
    builder.endObject();
    return builder;
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
