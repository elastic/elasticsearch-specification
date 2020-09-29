
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
import org.elasticsearch.common_abstractions.request.*;

public class DeleteEnrichPolicyRequest extends RequestBase<DeleteEnrichPolicyRequest> implements XContentable<DeleteEnrichPolicyRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public DeleteEnrichPolicyRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeleteEnrichPolicyRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeleteEnrichPolicyRequest, Void> PARSER =
    new ObjectParser<>(DeleteEnrichPolicyRequest.class.getName(), false, DeleteEnrichPolicyRequest::new);

  static {
    
  }

}
