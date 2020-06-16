
package org.elasticsearch.x_pack.roll_up.create_rollup_job;

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


public class CreateRollupJobResponse  implements XContentable<CreateRollupJobResponse> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
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
