
package org.elasticsearch.x_pack.ilm.delete_lifecycle;

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

public class DeleteLifecycleRequest extends RequestBase<DeleteLifecycleRequest> implements XContentable<DeleteLifecycleRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public DeleteLifecycleRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeleteLifecycleRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeleteLifecycleRequest, Void> PARSER =
    new ObjectParser<>(DeleteLifecycleRequest.class.getName(), false, DeleteLifecycleRequest::new);

  static {
    
  }

}
