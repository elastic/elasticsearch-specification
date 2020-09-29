
package org.elasticsearch.document.multiple.delete_by_query_rethrottle;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.cluster.task_management.list_tasks.*;
import org.elasticsearch.common_abstractions.response.*;

public class DeleteByQueryRethrottleResponse extends ListTasksResponse implements XContentable<DeleteByQueryRethrottleResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public DeleteByQueryRethrottleResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeleteByQueryRethrottleResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeleteByQueryRethrottleResponse, Void> PARSER =
    new ObjectParser<>(DeleteByQueryRethrottleResponse.class.getName(), false, DeleteByQueryRethrottleResponse::new);

  static {
    
  }

}
