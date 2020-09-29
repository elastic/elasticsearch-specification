
package org.elasticsearch.mapping.meta_fields;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;


public class FieldMapping  implements XContentable<FieldMapping> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    
  }

  @Override
  public FieldMapping fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return FieldMapping.PARSER.apply(parser, null);
  }

  public static final ObjectParser<FieldMapping, Void> PARSER =
    new ObjectParser<>(FieldMapping.class.getName(), false, FieldMapping::new);

  static {
    
  }

}
