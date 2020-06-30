
package org.elasticsearch.x_pack.watcher.restart_watcher;

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


public class RestartWatcherResponse  implements XContentable<RestartWatcherResponse> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
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
