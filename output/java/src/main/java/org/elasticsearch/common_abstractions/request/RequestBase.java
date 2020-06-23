
package org.elasticsearch.common_abstractions.request;

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


public class RequestBase  implements XContentable<RequestBase> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public RequestBase fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RequestBase.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RequestBase, Void> PARSER =
    new ObjectParser<>(RequestBase.class.getName(), false, RequestBase::new);

  static {
    
  }

}
