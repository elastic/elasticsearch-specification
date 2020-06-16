
package org.elasticsearch.mapping.types;

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


public class PropertyWithClrOrigin  implements XContentable<PropertyWithClrOrigin> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public PropertyWithClrOrigin fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PropertyWithClrOrigin.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PropertyWithClrOrigin, Void> PARSER =
    new ObjectParser<>(PropertyWithClrOrigin.class.getName(), false, PropertyWithClrOrigin::new);

  static {
    
  }

}
