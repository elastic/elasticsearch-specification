
package org.elasticsearch.x_pack.transform.delete_transform;

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


public class DeleteTransformResponse  implements XContentable<DeleteTransformResponse> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public DeleteTransformResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeleteTransformResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeleteTransformResponse, Void> PARSER =
    new ObjectParser<>(DeleteTransformResponse.class.getName(), false, DeleteTransformResponse::new);

  static {
    
  }

}
