
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
import org.elasticsearch.x_pack.license.get_license.*;
import org.elasticsearch.common_abstractions.response.*;

public class GetLicenseResponse extends ResponseBase<GetLicenseResponse> implements XContentable<GetLicenseResponse> {
  
  static final ParseField LICENSE = new ParseField("license");
  private LicenseInformation _license;
  public LicenseInformation getLicense() { return this._license; }
  public GetLicenseResponse setLicense(LicenseInformation val) { this._license = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_license != null) {
      builder.field(LICENSE.getPreferredName());
      _license.toXContent(builder, params);
    }
  }

  @Override
  public GetLicenseResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetLicenseResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetLicenseResponse, Void> PARSER =
    new ObjectParser<>(GetLicenseResponse.class.getName(), false, GetLicenseResponse::new);

  static {
    PARSER.declareObject(GetLicenseResponse::setLicense, (p, t) -> LicenseInformation.PARSER.apply(p, t), LICENSE);
  }

}
