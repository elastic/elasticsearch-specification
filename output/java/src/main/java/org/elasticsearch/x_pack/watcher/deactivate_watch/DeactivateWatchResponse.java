
package org.elasticsearch.x_pack.watcher.deactivate_watch;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.x_pack.watcher.activate_watch.*;
import org.elasticsearch.common_abstractions.response.*;

public class DeactivateWatchResponse extends ResponseBase<DeactivateWatchResponse> implements XContentable<DeactivateWatchResponse> {
  
  static final ParseField STATUS = new ParseField("status");
  private ActivationStatus _status;
  public ActivationStatus getStatus() { return this._status; }
  public DeactivateWatchResponse setStatus(ActivationStatus val) { this._status = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_status != null) {
      builder.field(STATUS.getPreferredName());
      _status.toXContent(builder, params);
    }
  }

  @Override
  public DeactivateWatchResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeactivateWatchResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeactivateWatchResponse, Void> PARSER =
    new ObjectParser<>(DeactivateWatchResponse.class.getName(), false, DeactivateWatchResponse::new);

  static {
    PARSER.declareObject(DeactivateWatchResponse::setStatus, (p, t) -> ActivationStatus.PARSER.apply(p, t), STATUS);
  }

}
