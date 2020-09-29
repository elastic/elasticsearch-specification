
package org.elasticsearch.indices.status_management.clear_cache;

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

public class ClearCacheResponse extends ShardsOperationResponseBase implements XContentable<ClearCacheResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public ClearCacheResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ClearCacheResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ClearCacheResponse, Void> PARSER =
    new ObjectParser<>(ClearCacheResponse.class.getName(), false, ClearCacheResponse::new);

  static {
    
  }

}
