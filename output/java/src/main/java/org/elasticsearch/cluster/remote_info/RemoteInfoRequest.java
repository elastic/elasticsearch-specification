
package org.elasticsearch.cluster.remote_info;

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


public class RemoteInfoRequest  implements XContentable<RemoteInfoRequest> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public RemoteInfoRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RemoteInfoRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RemoteInfoRequest, Void> PARSER =
    new ObjectParser<>(RemoteInfoRequest.class.getName(), false, RemoteInfoRequest::new);

  static {
    
  }

}
