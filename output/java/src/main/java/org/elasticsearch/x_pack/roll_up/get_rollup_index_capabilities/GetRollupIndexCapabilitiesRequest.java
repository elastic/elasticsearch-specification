
package org.elasticsearch.x_pack.roll_up.get_rollup_index_capabilities;

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

public class GetRollupIndexCapabilitiesRequest extends RequestBase<GetRollupIndexCapabilitiesRequest> implements XContentable<GetRollupIndexCapabilitiesRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public GetRollupIndexCapabilitiesRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetRollupIndexCapabilitiesRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetRollupIndexCapabilitiesRequest, Void> PARSER =
    new ObjectParser<>(GetRollupIndexCapabilitiesRequest.class.getName(), false, GetRollupIndexCapabilitiesRequest::new);

  static {
    
  }

}
