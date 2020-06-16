
package org.elasticsearch.x_pack.roll_up.get_rollup_capabilities;

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


public class GetRollupCapabilitiesRequest  implements XContentable<GetRollupCapabilitiesRequest> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public GetRollupCapabilitiesRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetRollupCapabilitiesRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetRollupCapabilitiesRequest, Void> PARSER =
    new ObjectParser<>(GetRollupCapabilitiesRequest.class.getName(), false, GetRollupCapabilitiesRequest::new);

  static {
    
  }

}
