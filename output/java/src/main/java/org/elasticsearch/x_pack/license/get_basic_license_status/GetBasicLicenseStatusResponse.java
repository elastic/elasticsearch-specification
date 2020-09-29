
package org.elasticsearch.x_pack.license.get_basic_license_status;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_abstractions.response.*;

public class GetBasicLicenseStatusResponse extends ResponseBase<GetBasicLicenseStatusResponse> implements XContentable<GetBasicLicenseStatusResponse> {
  
  static final ParseField ELIGIBLE_TO_START_BASIC = new ParseField("eligible_to_start_basic");
  private Boolean _eligibleToStartBasic;
  public Boolean getEligibleToStartBasic() { return this._eligibleToStartBasic; }
  public GetBasicLicenseStatusResponse setEligibleToStartBasic(Boolean val) { this._eligibleToStartBasic = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_eligibleToStartBasic != null) {
      builder.field(ELIGIBLE_TO_START_BASIC.getPreferredName(), _eligibleToStartBasic);
    }
  }

  @Override
  public GetBasicLicenseStatusResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetBasicLicenseStatusResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetBasicLicenseStatusResponse, Void> PARSER =
    new ObjectParser<>(GetBasicLicenseStatusResponse.class.getName(), false, GetBasicLicenseStatusResponse::new);

  static {
    PARSER.declareBoolean(GetBasicLicenseStatusResponse::setEligibleToStartBasic, ELIGIBLE_TO_START_BASIC);
  }

}
