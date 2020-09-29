
package org.elasticsearch.indices.mapping_management.get_field_mapping;

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
import org.elasticsearch.indices.mapping_management.get_field_mapping.*;

public class GetFieldMappingResponse extends DictionaryResponseBase<String, TypeFieldMappings> implements XContentable<GetFieldMappingResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public GetFieldMappingResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetFieldMappingResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetFieldMappingResponse, Void> PARSER =
    new ObjectParser<>(GetFieldMappingResponse.class.getName(), false, GetFieldMappingResponse::new);

  static {
    
  }

}
