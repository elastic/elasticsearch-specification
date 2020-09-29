
package org.elasticsearch.indices.status_management.synced_flush;

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

public class SyncedFlushResponse extends ShardsOperationResponseBase implements XContentable<SyncedFlushResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public SyncedFlushResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SyncedFlushResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SyncedFlushResponse, Void> PARSER =
    new ObjectParser<>(SyncedFlushResponse.class.getName(), false, SyncedFlushResponse::new);

  static {
    
  }

}
