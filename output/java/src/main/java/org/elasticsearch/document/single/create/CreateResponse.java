
package org.elasticsearch.document.single.create;

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


public class CreateResponse  implements XContentable<CreateResponse> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public CreateResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CreateResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CreateResponse, Void> PARSER =
    new ObjectParser<>(CreateResponse.class.getName(), false, CreateResponse::new);

  static {
    
  }

}
