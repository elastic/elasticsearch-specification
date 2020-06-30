
package org.elasticsearch.x_pack.enrich.put_policy;

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


public class PutEnrichPolicyResponse  implements XContentable<PutEnrichPolicyResponse> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public PutEnrichPolicyResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PutEnrichPolicyResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PutEnrichPolicyResponse, Void> PARSER =
    new ObjectParser<>(PutEnrichPolicyResponse.class.getName(), false, PutEnrichPolicyResponse::new);

  static {
    
  }

}
