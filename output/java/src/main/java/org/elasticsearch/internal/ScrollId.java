
package org.elasticsearch.internal;

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


public class ScrollId  implements XContentable<ScrollId> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public ScrollId fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ScrollId.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ScrollId, Void> PARSER =
    new ObjectParser<>(ScrollId.class.getName(), false, ScrollId::new);

  static {
    
  }

}
