
package org.elasticsearch.x_pack.watcher.acknowledge_watch;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum AcknowledgementState implements XContentable<AcknowledgementState> {
  AwaitsSuccessfulExecution("awaits_successful_execution"),
    Ackable("ackable"),
    Acked("acked");
  private final String textRepresentation;

  private AcknowledgementState(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public AcknowledgementState fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, AcknowledgementState, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "awaits_successful_execution": return AcknowledgementState.AwaitsSuccessfulExecution;
      case "ackable": return AcknowledgementState.Ackable;
      case "acked": return AcknowledgementState.Acked;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, AcknowledgementState.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
