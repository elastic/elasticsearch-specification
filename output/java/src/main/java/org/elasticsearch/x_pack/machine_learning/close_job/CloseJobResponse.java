
package org.elasticsearch.x_pack.machine_learning.close_job;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_abstractions.response.*;

public class CloseJobResponse extends ResponseBase<CloseJobResponse> implements XContentable<CloseJobResponse> {
  
  static final ParseField CLOSED = new ParseField("closed");
  private Boolean _closed;
  public Boolean getClosed() { return this._closed; }
  public CloseJobResponse setClosed(Boolean val) { this._closed = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_closed != null) {
      builder.field(CLOSED.getPreferredName(), _closed);
    }
  }

  @Override
  public CloseJobResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CloseJobResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CloseJobResponse, Void> PARSER =
    new ObjectParser<>(CloseJobResponse.class.getName(), false, CloseJobResponse::new);

  static {
    PARSER.declareBoolean(CloseJobResponse::setClosed, CLOSED);
  }

}
