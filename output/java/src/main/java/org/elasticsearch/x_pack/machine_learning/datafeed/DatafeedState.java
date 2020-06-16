
package org.elasticsearch.x_pack.machine_learning.datafeed;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum DatafeedState implements XContentable<DatafeedState> {
  Started("started"),
    Stopped("stopped"),
    Starting("starting"),
    Stopping("stopping");
  private final String textRepresentation;

  private DatafeedState(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public DatafeedState fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, DatafeedState, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "started": return DatafeedState.Started;
      case "stopped": return DatafeedState.Stopped;
      case "starting": return DatafeedState.Starting;
      case "stopping": return DatafeedState.Stopping;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, DatafeedState.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
