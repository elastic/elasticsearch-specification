
package org.elasticsearch.x_pack.machine_learning.get_datafeeds;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_abstractions.request.*;

public class GetDatafeedsRequest extends RequestBase<GetDatafeedsRequest> implements XContentable<GetDatafeedsRequest> {
  
  static final ParseField ALLOW_NO_DATAFEEDS = new ParseField("allow_no_datafeeds");
  private Boolean _allowNoDatafeeds;
  public Boolean getAllowNoDatafeeds() { return this._allowNoDatafeeds; }
  public GetDatafeedsRequest setAllowNoDatafeeds(Boolean val) { this._allowNoDatafeeds = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_allowNoDatafeeds != null) {
      builder.field(ALLOW_NO_DATAFEEDS.getPreferredName(), _allowNoDatafeeds);
    }
  }

  @Override
  public GetDatafeedsRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetDatafeedsRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetDatafeedsRequest, Void> PARSER =
    new ObjectParser<>(GetDatafeedsRequest.class.getName(), false, GetDatafeedsRequest::new);

  static {
    PARSER.declareBoolean(GetDatafeedsRequest::setAllowNoDatafeeds, ALLOW_NO_DATAFEEDS);
  }

}
