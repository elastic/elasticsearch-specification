
package org.elasticsearch.x_pack.ilm.get_lifecycle;

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
import org.elasticsearch.x_pack.ilm.get_lifecycle.*;
import org.elasticsearch.common_abstractions.response.*;

public class GetLifecycleResponse extends DictionaryResponseBase<String, LifecyclePolicy> implements XContentable<GetLifecycleResponse> {
  
  static final ParseField POLICIES = new ParseField("policies");
  private NamedContainer<String, LifecyclePolicy> _policies;
  public NamedContainer<String, LifecyclePolicy> getPolicies() { return this._policies; }
  public GetLifecycleResponse setPolicies(NamedContainer<String, LifecyclePolicy> val) { this._policies = val; return this; }


  
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
  public GetLifecycleResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetLifecycleResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetLifecycleResponse, Void> PARSER =
    new ObjectParser<>(GetLifecycleResponse.class.getName(), false, GetLifecycleResponse::new);

  static {
    PARSER.declareObject(GetLifecycleResponse::setPolicies, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> LifecyclePolicy.PARSER.apply(pp, null)), POLICIES);
  }

}
