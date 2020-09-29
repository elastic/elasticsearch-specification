
package org.elasticsearch.mapping.types.specialized.murmur3_hash;

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

public class Murmur3HashProperty extends DocValuesPropertyBase implements XContentable<Murmur3HashProperty> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public Murmur3HashProperty fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return Murmur3HashProperty.PARSER.apply(parser, null);
  }

  public static final ObjectParser<Murmur3HashProperty, Void> PARSER =
    new ObjectParser<>(Murmur3HashProperty.class.getName(), false, Murmur3HashProperty::new);

  static {
    
  }

}
