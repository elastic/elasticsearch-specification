
package org.elasticsearch.x_pack.license.start_basic_license;

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

public class StartBasicLicenseRequest extends RequestBase<StartBasicLicenseRequest> implements XContentable<StartBasicLicenseRequest> {
  
  static final ParseField ACKNOWLEDGE = new ParseField("acknowledge");
  private Boolean _acknowledge;
  public Boolean getAcknowledge() { return this._acknowledge; }
  public StartBasicLicenseRequest setAcknowledge(Boolean val) { this._acknowledge = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_acknowledge != null) {
      builder.field(ACKNOWLEDGE.getPreferredName(), _acknowledge);
    }
  }

  @Override
  public StartBasicLicenseRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return StartBasicLicenseRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<StartBasicLicenseRequest, Void> PARSER =
    new ObjectParser<>(StartBasicLicenseRequest.class.getName(), false, StartBasicLicenseRequest::new);

  static {
    PARSER.declareBoolean(StartBasicLicenseRequest::setAcknowledge, ACKNOWLEDGE);
  }

}
