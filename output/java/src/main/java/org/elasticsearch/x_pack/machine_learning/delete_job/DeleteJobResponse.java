
package org.elasticsearch.x_pack.machine_learning.delete_job;

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


public class DeleteJobResponse  implements XContentable<DeleteJobResponse> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public DeleteJobResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeleteJobResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeleteJobResponse, Void> PARSER =
    new ObjectParser<>(DeleteJobResponse.class.getName(), false, DeleteJobResponse::new);

  static {
    
  }

}
