
package org.elasticsearch.cluster;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum ClusterStatus implements XContentable<ClusterStatus> {
  Green("green"),
    Yellow("yellow"),
    Red("red");
  private final String textRepresentation;

  private ClusterStatus(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public ClusterStatus fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, ClusterStatus, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "green": return ClusterStatus.Green;
      case "yellow": return ClusterStatus.Yellow;
      case "red": return ClusterStatus.Red;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, ClusterStatus.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
