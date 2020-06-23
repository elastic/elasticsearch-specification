
package org.elasticsearch.indices.status_management.force_merge;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.Either;
import org.elasticsearch.XContentable;
import org.elasticsearch.NamedContainer;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;


public class ForceMergeResponse  implements XContentable<ForceMergeResponse> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
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
