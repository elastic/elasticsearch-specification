
package org.elasticsearch.indices.index_management.delete_index;

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


public class DeleteIndexResponse  implements XContentable<DeleteIndexResponse> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
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
