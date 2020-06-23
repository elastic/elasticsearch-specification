
package org.elasticsearch.x_pack.async_search.get;

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


public class AsyncSearchGetResponse<TDocument>  implements XContentable<AsyncSearchGetResponse<TDocument>> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public AsyncSearchGetResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return AsyncSearchGetResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<AsyncSearchGetResponse, Void> PARSER =
    new ObjectParser<>(AsyncSearchGetResponse.class.getName(), false, AsyncSearchGetResponse::new);

  static {
    
  }

}
