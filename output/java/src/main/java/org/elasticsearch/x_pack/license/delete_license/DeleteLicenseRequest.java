
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


public class DeleteLicenseRequest  implements XContentable<DeleteLicenseRequest> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public DeleteLicenseRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeleteLicenseRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeleteLicenseRequest, Void> PARSER =
    new ObjectParser<>(DeleteLicenseRequest.class.getName(), false, DeleteLicenseRequest::new);

  static {
    
  }

}
