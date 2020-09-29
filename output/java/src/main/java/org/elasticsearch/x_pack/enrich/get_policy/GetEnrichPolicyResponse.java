
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
import org.elasticsearch.x_pack.enrich.*;
import org.elasticsearch.common_abstractions.response.*;

public class GetEnrichPolicyResponse extends ResponseBase<GetEnrichPolicyResponse> implements XContentable<GetEnrichPolicyResponse> {
  
  static final ParseField POLICIES = new ParseField("policies");
  private List<NamedPolicyMetadata> _policies;
  public List<NamedPolicyMetadata> getPolicies() { return this._policies; }
  public GetEnrichPolicyResponse setPolicies(List<NamedPolicyMetadata> val) { this._policies = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_policies != null) {
      builder.array(POLICIES.getPreferredName(), _policies);
    }
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
