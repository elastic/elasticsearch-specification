
package org.elasticsearch.x_pack.license.delete_license;

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

public class DeleteLicenseResponse extends ResponseBase<DeleteLicenseResponse> implements XContentable<DeleteLicenseResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public DeleteLicenseResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeleteLicenseResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeleteLicenseResponse, Void> PARSER =
    new ObjectParser<>(DeleteLicenseResponse.class.getName(), false, DeleteLicenseResponse::new);

  static {
    
  }

}
