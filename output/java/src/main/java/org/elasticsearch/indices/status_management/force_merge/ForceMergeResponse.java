
package org.elasticsearch.indices.status_management.force_merge;

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

public class ForceMergeResponse extends ShardsOperationResponseBase implements XContentable<ForceMergeResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public ForceMergeResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ForceMergeResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ForceMergeResponse, Void> PARSER =
    new ObjectParser<>(ForceMergeResponse.class.getName(), false, ForceMergeResponse::new);

  static {
    
  }

}
