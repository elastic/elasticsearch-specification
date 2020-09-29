
package org.elasticsearch.x_pack.watcher.delete_watch;

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

public class DeleteWatchRequest extends RequestBase<DeleteWatchRequest> implements XContentable<DeleteWatchRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public DeleteWatchRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeleteWatchRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeleteWatchRequest, Void> PARSER =
    new ObjectParser<>(DeleteWatchRequest.class.getName(), false, DeleteWatchRequest::new);

  static {
    
  }

}
