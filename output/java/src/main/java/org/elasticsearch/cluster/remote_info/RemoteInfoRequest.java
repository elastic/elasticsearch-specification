
package org.elasticsearch.cluster.remote_info;

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

public class RemoteInfoRequest extends RequestBase<RemoteInfoRequest> implements XContentable<RemoteInfoRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
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
