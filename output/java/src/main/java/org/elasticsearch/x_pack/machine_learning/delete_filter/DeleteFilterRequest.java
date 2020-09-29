
package org.elasticsearch.x_pack.machine_learning.delete_filter;

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

public class DeleteFilterRequest extends RequestBase<DeleteFilterRequest> implements XContentable<DeleteFilterRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public DeleteFilterRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeleteFilterRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeleteFilterRequest, Void> PARSER =
    new ObjectParser<>(DeleteFilterRequest.class.getName(), false, DeleteFilterRequest::new);

  static {
    
  }

}
