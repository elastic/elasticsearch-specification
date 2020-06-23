
package org.elasticsearch.x_pack.watcher.acknowledge_watch;

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
import org.elasticsearch.x_pack.watcher.acknowledge_watch.*;

public class AcknowledgeWatchResponse  implements XContentable<AcknowledgeWatchResponse> {
  
  static final ParseField STATUS = new ParseField("status");
  private WatchStatus _status;
  public WatchStatus getStatus() { return this._status; }
  public AcknowledgeWatchResponse setStatus(WatchStatus val) { this._status = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_status != null) {
      builder.field(STATUS.getPreferredName());
      _status.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public AcknowledgeWatchResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return AcknowledgeWatchResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<AcknowledgeWatchResponse, Void> PARSER =
    new ObjectParser<>(AcknowledgeWatchResponse.class.getName(), false, AcknowledgeWatchResponse::new);

  static {
    PARSER.declareObject(AcknowledgeWatchResponse::setStatus, (p, t) -> WatchStatus.PARSER.apply(p, t), STATUS);
  }

}
