
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


public class GetTrialLicenseStatusRequest  implements XContentable<GetTrialLicenseStatusRequest> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public GetTrialLicenseStatusRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetTrialLicenseStatusRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetTrialLicenseStatusRequest, Void> PARSER =
    new ObjectParser<>(GetTrialLicenseStatusRequest.class.getName(), false, GetTrialLicenseStatusRequest::new);

  static {
    
  }

}
