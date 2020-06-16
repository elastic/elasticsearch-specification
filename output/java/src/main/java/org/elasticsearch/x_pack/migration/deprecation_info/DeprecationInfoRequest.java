
package org.elasticsearch.x_pack.migration.deprecation_info;

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


public class DeprecationInfoRequest  implements XContentable<DeprecationInfoRequest> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public DeprecationInfoRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeprecationInfoRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeprecationInfoRequest, Void> PARSER =
    new ObjectParser<>(DeprecationInfoRequest.class.getName(), false, DeprecationInfoRequest::new);

  static {
    
  }

}
