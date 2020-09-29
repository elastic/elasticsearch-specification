
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
import org.elasticsearch.common_abstractions.response.*;

public class OpenJobResponse extends ResponseBase<OpenJobResponse> implements XContentable<OpenJobResponse> {
  
  static final ParseField OPENED = new ParseField("opened");
  private Boolean _opened;
  public Boolean getOpened() { return this._opened; }
  public OpenJobResponse setOpened(Boolean val) { this._opened = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_opened != null) {
      builder.field(OPENED.getPreferredName(), _opened);
    }
  }

  @Override
  public OpenJobResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return OpenJobResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<OpenJobResponse, Void> PARSER =
    new ObjectParser<>(OpenJobResponse.class.getName(), false, OpenJobResponse::new);

  static {
    PARSER.declareBoolean(OpenJobResponse::setOpened, OPENED);
  }

}
