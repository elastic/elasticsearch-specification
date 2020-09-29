
package org.elasticsearch.indices.status_management.refresh;

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

public class RefreshResponse extends ShardsOperationResponseBase implements XContentable<RefreshResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public RefreshResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RefreshResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RefreshResponse, Void> PARSER =
    new ObjectParser<>(RefreshResponse.class.getName(), false, RefreshResponse::new);

  static {
    
  }

}
