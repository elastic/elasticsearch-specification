
package org.elasticsearch.x_pack.watcher.get_watch;

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

public class GetWatchRequest extends RequestBase<GetWatchRequest> implements XContentable<GetWatchRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public GetWatchRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetWatchRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetWatchRequest, Void> PARSER =
    new ObjectParser<>(GetWatchRequest.class.getName(), false, GetWatchRequest::new);

  static {
    
  }

}
