
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
import org.elasticsearch.common_abstractions.response.*;
import org.elasticsearch.x_pack.slm.*;

public class GetSnapshotLifecycleResponse extends DictionaryResponseBase<String, SnapshotLifecyclePolicyMetadata> implements XContentable<GetSnapshotLifecycleResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public GetSnapshotLifecycleResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetSnapshotLifecycleResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetSnapshotLifecycleResponse, Void> PARSER =
    new ObjectParser<>(GetSnapshotLifecycleResponse.class.getName(), false, GetSnapshotLifecycleResponse::new);

  static {
    
  }

}
