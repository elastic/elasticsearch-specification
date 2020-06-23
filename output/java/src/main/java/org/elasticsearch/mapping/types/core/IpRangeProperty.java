
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


public class IpRangeProperty  implements XContentable<IpRangeProperty> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public IpRangeProperty fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IpRangeProperty.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IpRangeProperty, Void> PARSER =
    new ObjectParser<>(IpRangeProperty.class.getName(), false, IpRangeProperty::new);

  static {
    
  }

}
