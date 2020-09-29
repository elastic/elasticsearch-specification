
package org.elasticsearch.x_pack.machine_learning.delete_job;

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

public class DeleteJobResponse extends AcknowledgedResponseBase implements XContentable<DeleteJobResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public DeleteJobResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeleteJobResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeleteJobResponse, Void> PARSER =
    new ObjectParser<>(DeleteJobResponse.class.getName(), false, DeleteJobResponse::new);

  static {
    
  }

}
