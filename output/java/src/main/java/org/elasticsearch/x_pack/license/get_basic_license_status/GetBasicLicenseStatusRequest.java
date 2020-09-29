
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
import org.elasticsearch.common_abstractions.request.*;

public class GetBasicLicenseStatusRequest extends RequestBase<GetBasicLicenseStatusRequest> implements XContentable<GetBasicLicenseStatusRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public GetBasicLicenseStatusRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetBasicLicenseStatusRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetBasicLicenseStatusRequest, Void> PARSER =
    new ObjectParser<>(GetBasicLicenseStatusRequest.class.getName(), false, GetBasicLicenseStatusRequest::new);

  static {
    
  }

}
