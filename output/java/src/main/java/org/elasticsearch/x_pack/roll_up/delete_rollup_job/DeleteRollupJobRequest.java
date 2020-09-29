
package org.elasticsearch.x_pack.roll_up.delete_rollup_job;

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

public class DeleteRollupJobRequest extends RequestBase<DeleteRollupJobRequest> implements XContentable<DeleteRollupJobRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public DeleteRollupJobRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeleteRollupJobRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeleteRollupJobRequest, Void> PARSER =
    new ObjectParser<>(DeleteRollupJobRequest.class.getName(), false, DeleteRollupJobRequest::new);

  static {
    
  }

}
