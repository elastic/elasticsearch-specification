
package org.elasticsearch.x_pack.roll_up.get_rollup_capabilities;

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

public class GetRollupCapabilitiesRequest extends RequestBase<GetRollupCapabilitiesRequest> implements XContentable<GetRollupCapabilitiesRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
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
