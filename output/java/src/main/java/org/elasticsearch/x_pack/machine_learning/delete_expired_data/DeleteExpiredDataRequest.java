
package org.elasticsearch.x_pack.machine_learning.delete_expired_data;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_abstractions.request.*;

public class DeleteExpiredDataRequest extends RequestBase<DeleteExpiredDataRequest> implements XContentable<DeleteExpiredDataRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public DeleteExpiredDataRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeleteExpiredDataRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeleteExpiredDataRequest, Void> PARSER =
    new ObjectParser<>(DeleteExpiredDataRequest.class.getName(), false, DeleteExpiredDataRequest::new);

  static {
    
  }

}
