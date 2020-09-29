
package org.elasticsearch.x_pack.enrich.execute_policy;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.x_pack.enrich.execute_policy.*;

public class ExecuteEnrichPolicyStatus  implements XContentable<ExecuteEnrichPolicyStatus> {
  
  static final ParseField PHASE = new ParseField("phase");
  private EnrichPolicyPhase _phase;
  public EnrichPolicyPhase getPhase() { return this._phase; }
  public ExecuteEnrichPolicyStatus setPhase(EnrichPolicyPhase val) { this._phase = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_phase != null) {
      builder.field(PHASE.getPreferredName());
      _phase.toXContent(builder, params);
    }
  }

  @Override
  public ExecuteEnrichPolicyStatus fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ExecuteEnrichPolicyStatus.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ExecuteEnrichPolicyStatus, Void> PARSER =
    new ObjectParser<>(ExecuteEnrichPolicyStatus.class.getName(), false, ExecuteEnrichPolicyStatus::new);

  static {
    PARSER.declareField(ExecuteEnrichPolicyStatus::setPhase, (p, t) -> EnrichPolicyPhase.PARSER.apply(p), PHASE, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
