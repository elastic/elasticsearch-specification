
package org.elasticsearch.cluster.nodes_usage;

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

public class NodesUsageRequest extends RequestBase<NodesUsageRequest> implements XContentable<NodesUsageRequest> {
  
  static final ParseField TIMEOUT = new ParseField("timeout");
  private String _timeout;
  public String getTimeout() { return this._timeout; }
  public NodesUsageRequest setTimeout(String val) { this._timeout = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_timeout != null) {
      builder.field(TIMEOUT.getPreferredName(), _timeout);
    }
  }

  @Override
  public NodesUsageRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return NodesUsageRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<NodesUsageRequest, Void> PARSER =
    new ObjectParser<>(NodesUsageRequest.class.getName(), false, NodesUsageRequest::new);

  static {
    PARSER.declareString(NodesUsageRequest::setTimeout, TIMEOUT);
  }

}
