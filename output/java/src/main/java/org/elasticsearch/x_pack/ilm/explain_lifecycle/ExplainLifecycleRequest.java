
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


public class ExplainLifecycleRequest  implements XContentable<ExplainLifecycleRequest> {
  
  static final ParseField ONLY_ERRORS = new ParseField("only_errors");
  private Boolean _onlyErrors;
  public Boolean getOnlyErrors() { return this._onlyErrors; }
  public ExplainLifecycleRequest setOnlyErrors(Boolean val) { this._onlyErrors = val; return this; }


  static final ParseField ONLY_MANAGED = new ParseField("only_managed");
  private Boolean _onlyManaged;
  public Boolean getOnlyManaged() { return this._onlyManaged; }
  public ExplainLifecycleRequest setOnlyManaged(Boolean val) { this._onlyManaged = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_onlyErrors != null) {
      builder.field(ONLY_ERRORS.getPreferredName(), _onlyErrors);
    }
    if (_onlyManaged != null) {
      builder.field(ONLY_MANAGED.getPreferredName(), _onlyManaged);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ExplainLifecycleRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ExplainLifecycleRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ExplainLifecycleRequest, Void> PARSER =
    new ObjectParser<>(ExplainLifecycleRequest.class.getName(), false, ExplainLifecycleRequest::new);

  static {
    PARSER.declareBoolean(ExplainLifecycleRequest::setOnlyErrors, ONLY_ERRORS);
    PARSER.declareBoolean(ExplainLifecycleRequest::setOnlyManaged, ONLY_MANAGED);
  }

}
