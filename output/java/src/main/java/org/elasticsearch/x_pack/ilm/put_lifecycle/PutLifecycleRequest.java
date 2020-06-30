
package org.elasticsearch.x_pack.ilm.put_lifecycle;

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
import org.elasticsearch.x_pack.ilm.*;

public class PutLifecycleRequest  implements XContentable<PutLifecycleRequest> {
  
  static final ParseField POLICY = new ParseField("policy");
  private Policy _policy;
  public Policy getPolicy() { return this._policy; }
  public PutLifecycleRequest setPolicy(Policy val) { this._policy = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_policy != null) {
      builder.field(POLICY.getPreferredName());
      _policy.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public PutLifecycleRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PutLifecycleRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PutLifecycleRequest, Void> PARSER =
    new ObjectParser<>(PutLifecycleRequest.class.getName(), false, PutLifecycleRequest::new);

  static {
    PARSER.declareObject(PutLifecycleRequest::setPolicy, (p, t) -> Policy.PARSER.apply(p, t), POLICY);
  }

}
