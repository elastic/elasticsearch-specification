
package org.elasticsearch.indices.mapping_management.put_mapping;

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


public class PutMappingResponse  implements XContentable<PutMappingResponse> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public PutMappingResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PutMappingResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PutMappingResponse, Void> PARSER =
    new ObjectParser<>(PutMappingResponse.class.getName(), false, PutMappingResponse::new);

  static {
    
  }

}
