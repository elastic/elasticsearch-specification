
package org.elasticsearch.common_abstractions.union;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;


public class Union<TFirst, TSecond>  implements XContentable<Union> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    
  }

  @Override
  public Union fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return Union.PARSER.apply(parser, null);
  }

  public static final ObjectParser<Union, Void> PARSER =
    new ObjectParser<>(Union.class.getName(), false, Union::new);

  static {
    
  }

}
