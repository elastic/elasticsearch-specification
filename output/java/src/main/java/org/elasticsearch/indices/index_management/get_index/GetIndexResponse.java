
package org.elasticsearch.indices.index_management.get_index;

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
import org.elasticsearch.index_modules.index_settings.*;

public class GetIndexResponse extends DictionaryResponseBase<String, IndexState> implements XContentable<GetIndexResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public GetIndexResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetIndexResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetIndexResponse, Void> PARSER =
    new ObjectParser<>(GetIndexResponse.class.getName(), false, GetIndexResponse::new);

  static {
    
  }

}
