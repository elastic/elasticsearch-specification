
package org.elasticsearch.x_pack.migration.deprecation_info;

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

public class DeprecationInfoRequest extends RequestBase<DeprecationInfoRequest> implements XContentable<DeprecationInfoRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
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
