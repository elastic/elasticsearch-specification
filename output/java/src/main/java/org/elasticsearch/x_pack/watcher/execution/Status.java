
package org.elasticsearch.x_pack.watcher.execution;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum Status implements XContentable<Status> {
  Success("success"),
    Failure("failure"),
    Simulated("simulated"),
    Throttled("throttled");
  private final String textRepresentation;

  private Status(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public Status fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, Status, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "success": return Status.Success;
      case "failure": return Status.Failure;
      case "simulated": return Status.Simulated;
      case "throttled": return Status.Throttled;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, Status.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
