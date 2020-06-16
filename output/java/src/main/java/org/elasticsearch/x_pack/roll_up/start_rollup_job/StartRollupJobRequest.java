
package org.elasticsearch.x_pack.roll_up.start_rollup_job;

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


public class StartRollupJobRequest  implements XContentable<StartRollupJobRequest> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public StartRollupJobRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return StartRollupJobRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<StartRollupJobRequest, Void> PARSER =
    new ObjectParser<>(StartRollupJobRequest.class.getName(), false, StartRollupJobRequest::new);

  static {
    
  }

}
