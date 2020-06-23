
package org.elasticsearch.search;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.Either;
import org.elasticsearch.XContentable;
import org.elasticsearch.NamedContainer;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;


public class TypedSearchRequest  implements XContentable<TypedSearchRequest> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
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
