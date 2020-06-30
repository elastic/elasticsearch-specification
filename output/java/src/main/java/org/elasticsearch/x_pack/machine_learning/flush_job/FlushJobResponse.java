
package org.elasticsearch.x_pack.machine_learning.flush_job;

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


public class FlushJobResponse  implements XContentable<FlushJobResponse> {
  
  static final ParseField FLUSHED = new ParseField("flushed");
  private Boolean _flushed;
  public Boolean getFlushed() { return this._flushed; }
  public FlushJobResponse setFlushed(Boolean val) { this._flushed = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_flushed != null) {
      builder.field(FLUSHED.getPreferredName(), _flushed);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public FlushJobResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return FlushJobResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<FlushJobResponse, Void> PARSER =
    new ObjectParser<>(FlushJobResponse.class.getName(), false, FlushJobResponse::new);

  static {
    PARSER.declareBoolean(FlushJobResponse::setFlushed, FLUSHED);
  }

}
