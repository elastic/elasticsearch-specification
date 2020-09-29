
package org.elasticsearch.x_pack.roll_up.get_rollup_job;

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

public class GetRollupJobRequest extends RequestBase<GetRollupJobRequest> implements XContentable<GetRollupJobRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public GetRollupJobRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetRollupJobRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetRollupJobRequest, Void> PARSER =
    new ObjectParser<>(GetRollupJobRequest.class.getName(), false, GetRollupJobRequest::new);

  static {
    
  }

}
