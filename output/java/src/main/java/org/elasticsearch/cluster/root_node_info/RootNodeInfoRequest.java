
package org.elasticsearch.cluster.root_node_info;

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

public class RootNodeInfoRequest extends RequestBase<RootNodeInfoRequest> implements XContentable<RootNodeInfoRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public RootNodeInfoRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RootNodeInfoRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RootNodeInfoRequest, Void> PARSER =
    new ObjectParser<>(RootNodeInfoRequest.class.getName(), false, RootNodeInfoRequest::new);

  static {
    
  }

}
