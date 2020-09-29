
package org.elasticsearch.x_pack.watcher.watcher_stats;

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

public class WatcherStatsRequest extends RequestBase<WatcherStatsRequest> implements XContentable<WatcherStatsRequest> {
  
  static final ParseField EMIT_STACKTRACES = new ParseField("emit_stacktraces");
  private Boolean _emitStacktraces;
  public Boolean getEmitStacktraces() { return this._emitStacktraces; }
  public WatcherStatsRequest setEmitStacktraces(Boolean val) { this._emitStacktraces = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_emitStacktraces != null) {
      builder.field(EMIT_STACKTRACES.getPreferredName(), _emitStacktraces);
    }
  }

  @Override
  public WatcherStatsRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return WatcherStatsRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<WatcherStatsRequest, Void> PARSER =
    new ObjectParser<>(WatcherStatsRequest.class.getName(), false, WatcherStatsRequest::new);

  static {
    PARSER.declareBoolean(WatcherStatsRequest::setEmitStacktraces, EMIT_STACKTRACES);
  }

}
