
package org.elasticsearch.common_abstractions.response;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_abstractions.response.*;

public class DynamicResponseBase extends ResponseBase<DynamicResponseBase> implements XContentable<DynamicResponseBase> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public DynamicResponseBase fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DynamicResponseBase.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DynamicResponseBase, Void> PARSER =
    new ObjectParser<>(DynamicResponseBase.class.getName(), false, DynamicResponseBase::new);

  static {
    
  }

}
