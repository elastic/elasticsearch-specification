
package org.elasticsearch.indices.status_management.refresh;

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


public class RefreshResponse  implements XContentable<RefreshResponse> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
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
