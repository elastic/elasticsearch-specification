
package org.elasticsearch.x_pack.watcher.stop_watcher;

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

public class StopWatcherRequest extends RequestBase<StopWatcherRequest> implements XContentable<StopWatcherRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public StopWatcherRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return StopWatcherRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<StopWatcherRequest, Void> PARSER =
    new ObjectParser<>(StopWatcherRequest.class.getName(), false, StopWatcherRequest::new);

  static {
    
  }

}
