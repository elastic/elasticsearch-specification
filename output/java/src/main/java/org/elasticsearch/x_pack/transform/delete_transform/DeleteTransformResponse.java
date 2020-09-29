
package org.elasticsearch.x_pack.transform.delete_transform;

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

public class DeleteTransformResponse extends AcknowledgedResponseBase implements XContentable<DeleteTransformResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
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
