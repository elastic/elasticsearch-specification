
package org.elasticsearch.common_abstractions.infer.field;

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


public class Fields  implements XContentable<Fields> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public Fields fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return Fields.PARSER.apply(parser, null);
  }

  public static final ObjectParser<Fields, Void> PARSER =
    new ObjectParser<>(Fields.class.getName(), false, Fields::new);

  static {
    
  }

}
