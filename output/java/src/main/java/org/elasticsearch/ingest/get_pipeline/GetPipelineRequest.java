
package org.elasticsearch.ingest.get_pipeline;

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
import org.elasticsearch.common_options.time_unit.*;

public class GetPipelineRequest  implements XContentable<GetPipelineRequest> {
  
  static final ParseField MASTER_TIMEOUT = new ParseField("master_timeout");
  private Time _masterTimeout;
  public Time getMasterTimeout() { return this._masterTimeout; }
  public GetPipelineRequest setMasterTimeout(Time val) { this._masterTimeout = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_masterTimeout != null) {
      builder.field(MASTER_TIMEOUT.getPreferredName());
      _masterTimeout.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public GetPipelineRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetPipelineRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetPipelineRequest, Void> PARSER =
    new ObjectParser<>(GetPipelineRequest.class.getName(), false, GetPipelineRequest::new);

  static {
    PARSER.declareObject(GetPipelineRequest::setMasterTimeout, (p, t) -> Time.PARSER.apply(p, t), MASTER_TIMEOUT);
  }

}
