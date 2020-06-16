
package org.elasticsearch.x_pack.watcher.watcher_stats;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum WatcherState implements XContentable<WatcherState> {
  Stopped("stopped"),
    Starting("starting"),
    Started("started"),
    Stopping("stopping");
  private final String textRepresentation;

  private WatcherState(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public WatcherState fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, WatcherState, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "stopped": return WatcherState.Stopped;
      case "starting": return WatcherState.Starting;
      case "started": return WatcherState.Started;
      case "stopping": return WatcherState.Stopping;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, WatcherState.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
