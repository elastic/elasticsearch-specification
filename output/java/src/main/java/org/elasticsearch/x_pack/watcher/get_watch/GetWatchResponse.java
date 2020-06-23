
package org.elasticsearch.x_pack.watcher.get_watch;

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
import org.elasticsearch.x_pack.watcher.*;

public class GetWatchResponse  implements XContentable<GetWatchResponse> {
  
  static final ParseField FOUND = new ParseField("found");
  private Boolean _found;
  public Boolean getFound() { return this._found; }
  public GetWatchResponse setFound(Boolean val) { this._found = val; return this; }


  static final ParseField ID = new ParseField("_id");
  private String _id;
  public String getId() { return this._id; }
  public GetWatchResponse setId(String val) { this._id = val; return this; }


  static final ParseField STATUS = new ParseField("status");
  private WatchStatus _status;
  public WatchStatus getStatus() { return this._status; }
  public GetWatchResponse setStatus(WatchStatus val) { this._status = val; return this; }


  static final ParseField WATCH = new ParseField("watch");
  private Watch _watch;
  public Watch getWatch() { return this._watch; }
  public GetWatchResponse setWatch(Watch val) { this._watch = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_found != null) {
      builder.field(FOUND.getPreferredName(), _found);
    }
    if (_id != null) {
      builder.field(ID.getPreferredName(), _id);
    }
    if (_status != null) {
      builder.field(STATUS.getPreferredName());
      _status.toXContent(builder, params);
    }
    if (_watch != null) {
      builder.field(WATCH.getPreferredName());
      _watch.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public GetWatchResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetWatchResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetWatchResponse, Void> PARSER =
    new ObjectParser<>(GetWatchResponse.class.getName(), false, GetWatchResponse::new);

  static {
    PARSER.declareBoolean(GetWatchResponse::setFound, FOUND);
    PARSER.declareString(GetWatchResponse::setId, ID);
    PARSER.declareObject(GetWatchResponse::setStatus, (p, t) -> WatchStatus.PARSER.apply(p, t), STATUS);
    PARSER.declareObject(GetWatchResponse::setWatch, (p, t) -> Watch.PARSER.apply(p, t), WATCH);
  }

}
