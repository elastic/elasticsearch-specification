
package org.elasticsearch.x_pack.roll_up.create_rollup_job;

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

public class CreateRollupJobResponse extends AcknowledgedResponseBase implements XContentable<CreateRollupJobResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public CreateRollupJobResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CreateRollupJobResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CreateRollupJobResponse, Void> PARSER =
    new ObjectParser<>(CreateRollupJobResponse.class.getName(), false, CreateRollupJobResponse::new);

  static {
    
  }

}
