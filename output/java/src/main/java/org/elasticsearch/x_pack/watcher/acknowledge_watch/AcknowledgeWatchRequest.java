
package org.elasticsearch.x_pack.watcher.acknowledge_watch;

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


public class AcknowledgeWatchRequest  implements XContentable<AcknowledgeWatchRequest> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public AcknowledgeWatchRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return AcknowledgeWatchRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<AcknowledgeWatchRequest, Void> PARSER =
    new ObjectParser<>(AcknowledgeWatchRequest.class.getName(), false, AcknowledgeWatchRequest::new);

  static {
    
  }

}
