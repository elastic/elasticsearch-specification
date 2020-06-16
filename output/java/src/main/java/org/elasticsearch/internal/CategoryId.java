
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


public class CategoryId  implements XContentable<CategoryId> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public CategoryId fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CategoryId.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CategoryId, Void> PARSER =
    new ObjectParser<>(CategoryId.class.getName(), false, CategoryId::new);

  static {
    
  }

}
