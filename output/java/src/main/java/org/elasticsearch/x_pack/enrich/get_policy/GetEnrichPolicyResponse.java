
package org.elasticsearch.x_pack.enrich.get_policy;

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
import org.elasticsearch.x_pack.enrich.*;

public class GetEnrichPolicyResponse  implements XContentable<GetEnrichPolicyResponse> {
  
  static final ParseField POLICIES = new ParseField("policies");
  private List<NamedPolicyMetadata> _policies;
  public List<NamedPolicyMetadata> getPolicies() { return this._policies; }
  public GetEnrichPolicyResponse setPolicies(List<NamedPolicyMetadata> val) { this._policies = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_policies != null) {
      builder.array(POLICIES.getPreferredName(), _policies);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public GetEnrichPolicyResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetEnrichPolicyResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetEnrichPolicyResponse, Void> PARSER =
    new ObjectParser<>(GetEnrichPolicyResponse.class.getName(), false, GetEnrichPolicyResponse::new);

  static {
    PARSER.declareObjectArray(GetEnrichPolicyResponse::setPolicies, (p, t) -> NamedPolicyMetadata.PARSER.apply(p, t), POLICIES);
  }

}
