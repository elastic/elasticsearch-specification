
package org.elasticsearch.x_pack.watcher.start_watcher;

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

public class StartWatcherRequest extends RequestBase<StartWatcherRequest> implements XContentable<StartWatcherRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public StartWatcherRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return StartWatcherRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<StartWatcherRequest, Void> PARSER =
    new ObjectParser<>(StartWatcherRequest.class.getName(), false, StartWatcherRequest::new);

  static {
    
  }

}
