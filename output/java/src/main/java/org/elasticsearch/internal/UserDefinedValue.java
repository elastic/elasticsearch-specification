
package org.elasticsearch.internal;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;


public class UserDefinedValue  implements XContentable<UserDefinedValue> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    
  }

  @Override
  public UserDefinedValue fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return UserDefinedValue.PARSER.apply(parser, null);
  }

  public static final ObjectParser<UserDefinedValue, Void> PARSER =
    new ObjectParser<>(UserDefinedValue.class.getName(), false, UserDefinedValue::new);

  static {
    
  }

}
