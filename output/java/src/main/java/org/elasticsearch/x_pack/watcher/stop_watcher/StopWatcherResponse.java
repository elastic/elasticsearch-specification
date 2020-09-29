
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
import org.elasticsearch.common_abstractions.response.*;

public class StopWatcherResponse extends AcknowledgedResponseBase implements XContentable<StopWatcherResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public StopWatcherResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return StopWatcherResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<StopWatcherResponse, Void> PARSER =
    new ObjectParser<>(StopWatcherResponse.class.getName(), false, StopWatcherResponse::new);

  static {
    
  }

}
