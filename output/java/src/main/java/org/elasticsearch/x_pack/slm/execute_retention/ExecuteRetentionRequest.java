
package org.elasticsearch.x_pack.slm.execute_retention;

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


public class ExecuteRetentionRequest  implements XContentable<ExecuteRetentionRequest> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public ExecuteRetentionRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ExecuteRetentionRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ExecuteRetentionRequest, Void> PARSER =
    new ObjectParser<>(ExecuteRetentionRequest.class.getName(), false, ExecuteRetentionRequest::new);

  static {
    
  }

}
