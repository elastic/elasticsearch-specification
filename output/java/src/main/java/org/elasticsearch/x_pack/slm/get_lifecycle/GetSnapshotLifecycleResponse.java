
package org.elasticsearch.x_pack.slm.get_lifecycle;

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
import org.elasticsearch.x_pack.slm.*;
import org.elasticsearch.common_abstractions.response.*;

public class GetSnapshotLifecycleResponse extends DictionaryResponseBase<String, SnapshotLifecyclePolicyMetadata> implements XContentable<GetSnapshotLifecycleResponse> {
  
  static final ParseField POLICIES = new ParseField("policies");
  private NamedContainer<String, SnapshotLifecyclePolicyMetadata> _policies;
  public NamedContainer<String, SnapshotLifecyclePolicyMetadata> getPolicies() { return this._policies; }
  public GetSnapshotLifecycleResponse setPolicies(NamedContainer<String, SnapshotLifecyclePolicyMetadata> val) { this._policies = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_policies != null) {
      builder.field(POLICIES.getPreferredName());
      _policies.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public GetSnapshotLifecycleResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetSnapshotLifecycleResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetSnapshotLifecycleResponse, Void> PARSER =
    new ObjectParser<>(GetSnapshotLifecycleResponse.class.getName(), false, GetSnapshotLifecycleResponse::new);

  static {
    PARSER.declareObject(GetSnapshotLifecycleResponse::setPolicies, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> SnapshotLifecyclePolicyMetadata.PARSER.apply(pp, null)), POLICIES);
  }

}
