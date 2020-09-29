
package org.elasticsearch.indices.index_management.delete_index;

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

public class DeleteIndexResponse extends IndicesResponseBase implements XContentable<DeleteIndexResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public DeleteIndexResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeleteIndexResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeleteIndexResponse, Void> PARSER =
    new ObjectParser<>(DeleteIndexResponse.class.getName(), false, DeleteIndexResponse::new);

  static {
    
  }

}
