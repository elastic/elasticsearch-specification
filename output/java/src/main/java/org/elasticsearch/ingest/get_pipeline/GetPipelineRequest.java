
package org.elasticsearch.ingest.get_pipeline;

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

public class GetPipelineRequest extends RequestBase<GetPipelineRequest> implements XContentable<GetPipelineRequest> {
  
  static final ParseField MASTER_TIMEOUT = new ParseField("master_timeout");
  private String _masterTimeout;
  public String getMasterTimeout() { return this._masterTimeout; }
  public GetPipelineRequest setMasterTimeout(String val) { this._masterTimeout = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_masterTimeout != null) {
      builder.field(MASTER_TIMEOUT.getPreferredName(), _masterTimeout);
    }
  }

  @Override
  public GetPipelineRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetPipelineRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetPipelineRequest, Void> PARSER =
    new ObjectParser<>(GetPipelineRequest.class.getName(), false, GetPipelineRequest::new);

  static {
    PARSER.declareString(GetPipelineRequest::setMasterTimeout, MASTER_TIMEOUT);
  }

}
