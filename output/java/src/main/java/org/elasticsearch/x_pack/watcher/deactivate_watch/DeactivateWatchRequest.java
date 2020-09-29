
package org.elasticsearch.x_pack.watcher.deactivate_watch;

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

public class DeactivateWatchRequest extends RequestBase<DeactivateWatchRequest> implements XContentable<DeactivateWatchRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public DeactivateWatchRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeactivateWatchRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeactivateWatchRequest, Void> PARSER =
    new ObjectParser<>(DeactivateWatchRequest.class.getName(), false, DeactivateWatchRequest::new);

  static {
    
  }

}
