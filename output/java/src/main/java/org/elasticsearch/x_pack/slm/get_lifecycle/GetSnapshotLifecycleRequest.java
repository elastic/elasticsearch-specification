
package org.elasticsearch.x_pack.slm.get_lifecycle;

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

public class GetSnapshotLifecycleRequest extends RequestBase<GetSnapshotLifecycleRequest> implements XContentable<GetSnapshotLifecycleRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public GetSnapshotLifecycleRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetSnapshotLifecycleRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetSnapshotLifecycleRequest, Void> PARSER =
    new ObjectParser<>(GetSnapshotLifecycleRequest.class.getName(), false, GetSnapshotLifecycleRequest::new);

  static {
    
  }

}
