
package org.elasticsearch.x_pack.watcher.activate_watch;

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

public class ActivateWatchRequest extends RequestBase<ActivateWatchRequest> implements XContentable<ActivateWatchRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public ActivateWatchRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ActivateWatchRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ActivateWatchRequest, Void> PARSER =
    new ObjectParser<>(ActivateWatchRequest.class.getName(), false, ActivateWatchRequest::new);

  static {
    
  }

}
