
package org.elasticsearch.x_pack.enrich.delete_policy;

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


public class DeleteEnrichPolicyRequest  implements XContentable<DeleteEnrichPolicyRequest> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
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
