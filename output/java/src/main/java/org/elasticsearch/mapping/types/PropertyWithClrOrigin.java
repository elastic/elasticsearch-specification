
package org.elasticsearch.mapping.types;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;


public class PropertyWithClrOrigin  implements XContentable<PropertyWithClrOrigin> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    
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
