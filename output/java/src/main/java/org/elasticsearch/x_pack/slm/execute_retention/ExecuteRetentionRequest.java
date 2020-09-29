
package org.elasticsearch.x_pack.slm.execute_retention;

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

public class ExecuteRetentionRequest extends RequestBase<ExecuteRetentionRequest> implements XContentable<ExecuteRetentionRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
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
