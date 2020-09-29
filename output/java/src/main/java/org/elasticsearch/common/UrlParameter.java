
package org.elasticsearch.common;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;


public class UrlParameter  implements XContentable<UrlParameter> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    
  }

  @Override
  public UrlParameter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return UrlParameter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<UrlParameter, Void> PARSER =
    new ObjectParser<>(UrlParameter.class.getName(), false, UrlParameter::new);

  static {
    
  }

}
