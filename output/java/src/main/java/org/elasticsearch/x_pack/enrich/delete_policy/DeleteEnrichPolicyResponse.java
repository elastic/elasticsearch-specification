
package org.elasticsearch.x_pack.enrich.delete_policy;

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

public class DeleteEnrichPolicyResponse extends AcknowledgedResponseBase implements XContentable<DeleteEnrichPolicyResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public DeleteEnrichPolicyResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeleteEnrichPolicyResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeleteEnrichPolicyResponse, Void> PARSER =
    new ObjectParser<>(DeleteEnrichPolicyResponse.class.getName(), false, DeleteEnrichPolicyResponse::new);

  static {
    
  }

}
