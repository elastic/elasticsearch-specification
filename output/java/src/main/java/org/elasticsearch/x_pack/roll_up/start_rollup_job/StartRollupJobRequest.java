
package org.elasticsearch.x_pack.roll_up.start_rollup_job;

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

public class StartRollupJobRequest extends RequestBase<StartRollupJobRequest> implements XContentable<StartRollupJobRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
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
