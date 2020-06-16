
package org.elasticsearch.x_pack.license.get_trial_license_status;

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


public class GetTrialLicenseStatusResponse  implements XContentable<GetTrialLicenseStatusResponse> {
  
  static final ParseField ELIGIBLE_TO_START_TRIAL = new ParseField("eligible_to_start_trial");
  private Boolean _eligibleToStartTrial;
  public Boolean getEligibleToStartTrial() { return this._eligibleToStartTrial; }
  public GetTrialLicenseStatusResponse setEligibleToStartTrial(Boolean val) { this._eligibleToStartTrial = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_eligibleToStartTrial != null) {
      builder.field(ELIGIBLE_TO_START_TRIAL.getPreferredName(), _eligibleToStartTrial);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public GetTrialLicenseStatusResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetTrialLicenseStatusResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetTrialLicenseStatusResponse, Void> PARSER =
    new ObjectParser<>(GetTrialLicenseStatusResponse.class.getName(), false, GetTrialLicenseStatusResponse::new);

  static {
    PARSER.declareBoolean(GetTrialLicenseStatusResponse::setEligibleToStartTrial, ELIGIBLE_TO_START_TRIAL);
  }

}
