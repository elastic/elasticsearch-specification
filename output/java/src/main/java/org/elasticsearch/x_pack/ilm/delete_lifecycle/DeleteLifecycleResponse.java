
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
import org.elasticsearch.common_abstractions.response.*;

public class DeleteLifecycleResponse extends AcknowledgedResponseBase implements XContentable<DeleteLifecycleResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public DeleteLifecycleResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeleteLifecycleResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeleteLifecycleResponse, Void> PARSER =
    new ObjectParser<>(DeleteLifecycleResponse.class.getName(), false, DeleteLifecycleResponse::new);

  static {
    
  }

}
