
package org.elasticsearch.x_pack.license.delete_license;

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


public class DeleteLicenseResponse  implements XContentable<DeleteLicenseResponse> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
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
