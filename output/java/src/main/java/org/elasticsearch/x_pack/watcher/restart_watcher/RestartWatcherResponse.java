
package org.elasticsearch.x_pack.watcher.restart_watcher;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_abstractions.response.*;

public class RestartWatcherResponse extends AcknowledgedResponseBase implements XContentable<RestartWatcherResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public RestartWatcherResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RestartWatcherResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RestartWatcherResponse, Void> PARSER =
    new ObjectParser<>(RestartWatcherResponse.class.getName(), false, RestartWatcherResponse::new);

  static {
    
  }

}
