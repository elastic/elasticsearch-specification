
package org.elasticsearch.x_pack.machine_learning.update_job;

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

public class UpdateJobResponse extends ResponseBase<UpdateJobResponse> implements XContentable<UpdateJobResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public UpdateJobResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return UpdateJobResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<UpdateJobResponse, Void> PARSER =
    new ObjectParser<>(UpdateJobResponse.class.getName(), false, UpdateJobResponse::new);

  static {
    
  }

}
