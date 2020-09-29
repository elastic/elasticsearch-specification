
package org.elasticsearch.x_pack.license.post_license;

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
import org.elasticsearch.common_abstractions.request.*;

public class PostLicenseRequest extends RequestBase<PostLicenseRequest> implements XContentable<PostLicenseRequest> {
  
  static final ParseField ACKNOWLEDGE = new ParseField("acknowledge");
  private Boolean _acknowledge;
  public Boolean getAcknowledge() { return this._acknowledge; }
  public PostLicenseRequest setAcknowledge(Boolean val) { this._acknowledge = val; return this; }

  static final ParseField LICENSE = new ParseField("license");
  private License _license;
  public License getLicense() { return this._license; }
  public PostLicenseRequest setLicense(License val) { this._license = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_acknowledge != null) {
      builder.field(ACKNOWLEDGE.getPreferredName(), _acknowledge);
    }
    if (_license != null) {
      builder.field(LICENSE.getPreferredName());
      _license.toXContent(builder, params);
    }
  }

  @Override
  public PostLicenseRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PostLicenseRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PostLicenseRequest, Void> PARSER =
    new ObjectParser<>(PostLicenseRequest.class.getName(), false, PostLicenseRequest::new);

  static {
    PARSER.declareBoolean(PostLicenseRequest::setAcknowledge, ACKNOWLEDGE);
    PARSER.declareObject(PostLicenseRequest::setLicense, (p, t) -> License.PARSER.apply(p, t), LICENSE);
  }

}
