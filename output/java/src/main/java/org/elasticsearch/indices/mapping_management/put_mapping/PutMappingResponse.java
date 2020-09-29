
package org.elasticsearch.indices.mapping_management.put_mapping;

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

public class PutMappingResponse extends IndicesResponseBase implements XContentable<PutMappingResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
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
