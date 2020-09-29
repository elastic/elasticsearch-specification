
package org.elasticsearch.cluster.task_management.get_task;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.common_abstractions.request.*;

public class GetTaskRequest extends RequestBase<GetTaskRequest> implements XContentable<GetTaskRequest> {
  
  static final ParseField TIMEOUT = new ParseField("timeout");
  private String _timeout;
  public String getTimeout() { return this._timeout; }
  public GetTaskRequest setTimeout(String val) { this._timeout = val; return this; }

  static final ParseField WAIT_FOR_COMPLETION = new ParseField("wait_for_completion");
  private Boolean _waitForCompletion;
  public Boolean getWaitForCompletion() { return this._waitForCompletion; }
  public GetTaskRequest setWaitForCompletion(Boolean val) { this._waitForCompletion = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_timeout != null) {
      builder.field(TIMEOUT.getPreferredName(), _timeout);
    }
    if (_waitForCompletion != null) {
      builder.field(WAIT_FOR_COMPLETION.getPreferredName(), _waitForCompletion);
    }
  }

  @Override
  public GetTaskRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetTaskRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetTaskRequest, Void> PARSER =
    new ObjectParser<>(GetTaskRequest.class.getName(), false, GetTaskRequest::new);

  static {
    PARSER.declareString(GetTaskRequest::setTimeout, TIMEOUT);
    PARSER.declareBoolean(GetTaskRequest::setWaitForCompletion, WAIT_FOR_COMPLETION);
  }

}
