
package org.elasticsearch.x_pack.watcher.start_watcher;

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


public class StartWatcherRequest  implements XContentable<StartWatcherRequest> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
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
