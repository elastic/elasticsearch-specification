
package org.elasticsearch.x_pack.enrich.get_policy;

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

public class GetEnrichPolicyRequest extends RequestBase<GetEnrichPolicyRequest> implements XContentable<GetEnrichPolicyRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public GetEnrichPolicyRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetEnrichPolicyRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetEnrichPolicyRequest, Void> PARSER =
    new ObjectParser<>(GetEnrichPolicyRequest.class.getName(), false, GetEnrichPolicyRequest::new);

  static {
    
  }

}
