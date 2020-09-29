
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
import org.elasticsearch.internal.*;
import org.elasticsearch.common_abstractions.response.*;

public class ExecuteEnrichPolicyResponse extends ResponseBase<ExecuteEnrichPolicyResponse> implements XContentable<ExecuteEnrichPolicyResponse> {
  
  static final ParseField STATUS = new ParseField("status");
  private ExecuteEnrichPolicyStatus _status;
  public ExecuteEnrichPolicyStatus getStatus() { return this._status; }
  public ExecuteEnrichPolicyResponse setStatus(ExecuteEnrichPolicyStatus val) { this._status = val; return this; }

  static final ParseField TASK_ID = new ParseField("task_id");
  private String _taskId;
  public String getTaskId() { return this._taskId; }
  public ExecuteEnrichPolicyResponse setTaskId(String val) { this._taskId = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_status != null) {
      builder.field(STATUS.getPreferredName());
      _status.toXContent(builder, params);
    }
    if (_taskId != null) {
      builder.field(TASK_ID.getPreferredName(), _taskId);
    }
  }

  @Override
  public ExecuteEnrichPolicyResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ExecuteEnrichPolicyResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ExecuteEnrichPolicyResponse, Void> PARSER =
    new ObjectParser<>(ExecuteEnrichPolicyResponse.class.getName(), false, ExecuteEnrichPolicyResponse::new);

  static {
    PARSER.declareObject(ExecuteEnrichPolicyResponse::setStatus, (p, t) -> ExecuteEnrichPolicyStatus.PARSER.apply(p, t), STATUS);
    PARSER.declareString(ExecuteEnrichPolicyResponse::setTaskId, TASK_ID);
  }

}
