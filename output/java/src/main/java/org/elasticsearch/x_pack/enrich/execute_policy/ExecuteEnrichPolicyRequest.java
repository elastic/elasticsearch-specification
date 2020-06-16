
package org.elasticsearch.x_pack.enrich.execute_policy;

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


public class ExecuteEnrichPolicyRequest  implements XContentable<ExecuteEnrichPolicyRequest> {
  
  static final ParseField WAIT_FOR_COMPLETION = new ParseField("wait_for_completion");
  private Boolean _waitForCompletion;
  public Boolean getWaitForCompletion() { return this._waitForCompletion; }
  public ExecuteEnrichPolicyRequest setWaitForCompletion(Boolean val) { this._waitForCompletion = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_waitForCompletion != null) {
      builder.field(WAIT_FOR_COMPLETION.getPreferredName(), _waitForCompletion);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ExecuteEnrichPolicyRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ExecuteEnrichPolicyRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ExecuteEnrichPolicyRequest, Void> PARSER =
    new ObjectParser<>(ExecuteEnrichPolicyRequest.class.getName(), false, ExecuteEnrichPolicyRequest::new);

  static {
    PARSER.declareBoolean(ExecuteEnrichPolicyRequest::setWaitForCompletion, WAIT_FOR_COMPLETION);
  }

}
