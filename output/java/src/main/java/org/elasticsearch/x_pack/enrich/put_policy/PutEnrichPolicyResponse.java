
package org.elasticsearch.x_pack.enrich.put_policy;

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

public class PutEnrichPolicyResponse extends AcknowledgedResponseBase implements XContentable<PutEnrichPolicyResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
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
