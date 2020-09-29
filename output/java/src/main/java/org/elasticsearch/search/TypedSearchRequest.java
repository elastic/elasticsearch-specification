
package org.elasticsearch.search;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;


public class TypedSearchRequest  implements XContentable<TypedSearchRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    
  }

  @Override
  public TypedSearchRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TypedSearchRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TypedSearchRequest, Void> PARSER =
    new ObjectParser<>(TypedSearchRequest.class.getName(), false, TypedSearchRequest::new);

  static {
    
  }

}
