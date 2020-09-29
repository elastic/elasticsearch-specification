
package org.elasticsearch.indices.mapping_management.get_mapping;

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
import org.elasticsearch.internal.*;
import org.elasticsearch.indices.mapping_management.get_mapping.*;

public class GetMappingResponse extends DictionaryResponseBase<String, IndexMappings> implements XContentable<GetMappingResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public GetMappingResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetMappingResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetMappingResponse, Void> PARSER =
    new ObjectParser<>(GetMappingResponse.class.getName(), false, GetMappingResponse::new);

  static {
    
  }

}
