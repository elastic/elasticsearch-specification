
package org.elasticsearch.mapping.types.core;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.mapping.types.*;

public class BinaryProperty extends DocValuesPropertyBase implements XContentable<BinaryProperty> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public BinaryProperty fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return BinaryProperty.PARSER.apply(parser, null);
  }

  public static final ObjectParser<BinaryProperty, Void> PARSER =
    new ObjectParser<>(BinaryProperty.class.getName(), false, BinaryProperty::new);

  static {
    
  }

}
