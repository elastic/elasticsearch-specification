
package org.elasticsearch.x_pack.license.start_basic_license;

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


public class StartBasicLicenseRequest  implements XContentable<StartBasicLicenseRequest> {
  
  static final ParseField ACKNOWLEDGE = new ParseField("acknowledge");
  private Boolean _acknowledge;
  public Boolean getAcknowledge() { return this._acknowledge; }
  public StartBasicLicenseRequest setAcknowledge(Boolean val) { this._acknowledge = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_acknowledge != null) {
      builder.field(ACKNOWLEDGE.getPreferredName(), _acknowledge);
    }
    builder.endObject();
    return builder;
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
