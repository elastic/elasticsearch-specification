
package org.elasticsearch.cluster.root_node_info;

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


public class RootNodeInfoRequest  implements XContentable<RootNodeInfoRequest> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
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
