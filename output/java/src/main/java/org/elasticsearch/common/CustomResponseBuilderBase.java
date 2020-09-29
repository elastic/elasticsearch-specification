
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


public class CustomResponseBuilderBase  implements XContentable<CustomResponseBuilderBase> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    
  }

  @Override
  public CustomResponseBuilderBase fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CustomResponseBuilderBase.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CustomResponseBuilderBase, Void> PARSER =
    new ObjectParser<>(CustomResponseBuilderBase.class.getName(), false, CustomResponseBuilderBase::new);

  static {
    
  }

}
