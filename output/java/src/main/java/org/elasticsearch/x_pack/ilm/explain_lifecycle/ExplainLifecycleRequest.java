
package org.elasticsearch.x_pack.ilm.explain_lifecycle;

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

public class ExplainLifecycleRequest extends RequestBase<ExplainLifecycleRequest> implements XContentable<ExplainLifecycleRequest> {
  
  static final ParseField ONLY_ERRORS = new ParseField("only_errors");
  private Boolean _onlyErrors;
  public Boolean getOnlyErrors() { return this._onlyErrors; }
  public ExplainLifecycleRequest setOnlyErrors(Boolean val) { this._onlyErrors = val; return this; }

  static final ParseField ONLY_MANAGED = new ParseField("only_managed");
  private Boolean _onlyManaged;
  public Boolean getOnlyManaged() { return this._onlyManaged; }
  public ExplainLifecycleRequest setOnlyManaged(Boolean val) { this._onlyManaged = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_onlyErrors != null) {
      builder.field(ONLY_ERRORS.getPreferredName(), _onlyErrors);
    }
    if (_onlyManaged != null) {
      builder.field(ONLY_MANAGED.getPreferredName(), _onlyManaged);
    }
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
