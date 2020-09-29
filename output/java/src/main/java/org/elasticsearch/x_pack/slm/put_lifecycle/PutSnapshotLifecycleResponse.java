
package org.elasticsearch.x_pack.slm.put_lifecycle;

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

public class PutSnapshotLifecycleResponse extends AcknowledgedResponseBase implements XContentable<PutSnapshotLifecycleResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public PutSnapshotLifecycleResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PutSnapshotLifecycleResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PutSnapshotLifecycleResponse, Void> PARSER =
    new ObjectParser<>(PutSnapshotLifecycleResponse.class.getName(), false, PutSnapshotLifecycleResponse::new);

  static {
    
  }

}
