
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


public class DeleteEnrichPolicyResponse  implements XContentable<DeleteEnrichPolicyResponse> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
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
