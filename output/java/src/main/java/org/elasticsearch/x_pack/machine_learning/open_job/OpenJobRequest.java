
package org.elasticsearch.x_pack.machine_learning.open_job;

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

public class OpenJobRequest extends RequestBase<OpenJobRequest> implements XContentable<OpenJobRequest> {
  
  static final ParseField TIMEOUT = new ParseField("timeout");
  private String _timeout;
  public String getTimeout() { return this._timeout; }
  public OpenJobRequest setTimeout(String val) { this._timeout = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_timeout != null) {
      builder.field(TIMEOUT.getPreferredName(), _timeout);
    }
  }

  @Override
  public OpenJobRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return OpenJobRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<OpenJobRequest, Void> PARSER =
    new ObjectParser<>(OpenJobRequest.class.getName(), false, OpenJobRequest::new);

  static {
    PARSER.declareString(OpenJobRequest::setTimeout, TIMEOUT);
  }

}
