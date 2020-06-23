
package org.elasticsearch.mapping.types.core;

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


public class IntegerRangeProperty  implements XContentable<IntegerRangeProperty> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public IntegerRangeProperty fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IntegerRangeProperty.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IntegerRangeProperty, Void> PARSER =
    new ObjectParser<>(IntegerRangeProperty.class.getName(), false, IntegerRangeProperty::new);

  static {
    
  }

}
