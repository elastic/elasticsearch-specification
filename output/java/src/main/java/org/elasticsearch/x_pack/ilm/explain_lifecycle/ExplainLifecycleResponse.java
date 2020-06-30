
package org.elasticsearch.x_pack.ilm.explain_lifecycle;

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
import org.elasticsearch.x_pack.ilm.explain_lifecycle.*;

public class ExplainLifecycleResponse  implements XContentable<ExplainLifecycleResponse> {
  
  static final ParseField INDICES = new ParseField("indices");
  private NamedContainer<String, LifecycleExplain> _indices;
  public NamedContainer<String, LifecycleExplain> getIndices() { return this._indices; }
  public ExplainLifecycleResponse setIndices(NamedContainer<String, LifecycleExplain> val) { this._indices = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_indices != null) {
      builder.field(INDICES.getPreferredName());
      _indices.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ExplainLifecycleResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ExplainLifecycleResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ExplainLifecycleResponse, Void> PARSER =
    new ObjectParser<>(ExplainLifecycleResponse.class.getName(), false, ExplainLifecycleResponse::new);

  static {
    PARSER.declareObject(ExplainLifecycleResponse::setIndices, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> LifecycleExplain.PARSER.apply(pp, null)), INDICES);
  }

}
