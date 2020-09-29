
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
import org.elasticsearch.common_abstractions.response.*;

public class DeleteFilterResponse extends AcknowledgedResponseBase implements XContentable<DeleteFilterResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public DeleteFilterResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeleteFilterResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeleteFilterResponse, Void> PARSER =
    new ObjectParser<>(DeleteFilterResponse.class.getName(), false, DeleteFilterResponse::new);

  static {
    
  }

}
