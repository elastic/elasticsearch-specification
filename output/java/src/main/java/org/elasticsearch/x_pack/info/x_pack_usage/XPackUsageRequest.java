
package org.elasticsearch.x_pack.info.x_pack_usage;

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

public class XPackUsageRequest extends RequestBase<XPackUsageRequest> implements XContentable<XPackUsageRequest> {
  
  static final ParseField MASTER_TIMEOUT = new ParseField("master_timeout");
  private String _masterTimeout;
  public String getMasterTimeout() { return this._masterTimeout; }
  public XPackUsageRequest setMasterTimeout(String val) { this._masterTimeout = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_masterTimeout != null) {
      builder.field(MASTER_TIMEOUT.getPreferredName(), _masterTimeout);
    }
  }

  @Override
  public XPackUsageRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return XPackUsageRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<XPackUsageRequest, Void> PARSER =
    new ObjectParser<>(XPackUsageRequest.class.getName(), false, XPackUsageRequest::new);

  static {
    PARSER.declareString(XPackUsageRequest::setMasterTimeout, MASTER_TIMEOUT);
  }

}
