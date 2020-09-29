
package org.elasticsearch.x_pack.ssl.get_certificates;

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

public class GetCertificatesRequest extends RequestBase<GetCertificatesRequest> implements XContentable<GetCertificatesRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public GetCertificatesRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetCertificatesRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetCertificatesRequest, Void> PARSER =
    new ObjectParser<>(GetCertificatesRequest.class.getName(), false, GetCertificatesRequest::new);

  static {
    
  }

}
