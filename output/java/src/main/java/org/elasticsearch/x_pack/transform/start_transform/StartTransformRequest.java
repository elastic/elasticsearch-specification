
package org.elasticsearch.x_pack.transform.start_transform;

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

public class StartTransformRequest extends RequestBase<StartTransformRequest> implements XContentable<StartTransformRequest> {
  
  static final ParseField TIMEOUT = new ParseField("timeout");
  private String _timeout;
  public String getTimeout() { return this._timeout; }
  public StartTransformRequest setTimeout(String val) { this._timeout = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_timeout != null) {
      builder.field(TIMEOUT.getPreferredName(), _timeout);
    }
  }

  @Override
  public StartTransformRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return StartTransformRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<StartTransformRequest, Void> PARSER =
    new ObjectParser<>(StartTransformRequest.class.getName(), false, StartTransformRequest::new);

  static {
    PARSER.declareString(StartTransformRequest::setTimeout, TIMEOUT);
  }

}
