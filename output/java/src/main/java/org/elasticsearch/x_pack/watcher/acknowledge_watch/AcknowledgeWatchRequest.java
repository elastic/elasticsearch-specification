
package org.elasticsearch.x_pack.watcher.acknowledge_watch;

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

public class AcknowledgeWatchRequest extends RequestBase<AcknowledgeWatchRequest> implements XContentable<AcknowledgeWatchRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
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
