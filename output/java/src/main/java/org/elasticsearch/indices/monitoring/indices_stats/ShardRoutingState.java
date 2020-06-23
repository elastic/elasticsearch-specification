
package org.elasticsearch.indices.monitoring.indices_stats;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum ShardRoutingState implements XContentable<ShardRoutingState> {
  Unassigned("UNASSIGNED"),
    Initializing("INITIALIZING"),
    Started("STARTED"),
    Relocating("RELOCATING");
  private final String textRepresentation;

  private ShardRoutingState(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public ShardRoutingState fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, ShardRoutingState, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "UNASSIGNED": return ShardRoutingState.Unassigned;
      case "INITIALIZING": return ShardRoutingState.Initializing;
      case "STARTED": return ShardRoutingState.Started;
      case "RELOCATING": return ShardRoutingState.Relocating;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, ShardRoutingState.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
