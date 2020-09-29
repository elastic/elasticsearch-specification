
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
import org.elasticsearch.common_abstractions.response.*;

public class StartWatcherResponse extends AcknowledgedResponseBase implements XContentable<StartWatcherResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public StartWatcherResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return StartWatcherResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<StartWatcherResponse, Void> PARSER =
    new ObjectParser<>(StartWatcherResponse.class.getName(), false, StartWatcherResponse::new);

  static {
    
  }

}
