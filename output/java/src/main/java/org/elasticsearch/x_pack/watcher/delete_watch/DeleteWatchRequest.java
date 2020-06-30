
package org.elasticsearch.x_pack.watcher.delete_watch;

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


public class DeleteWatchRequest  implements XContentable<DeleteWatchRequest> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
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
