
package org.elasticsearch.x_pack.watcher.execution;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum ActionExecutionMode implements XContentable<ActionExecutionMode> {
  Simulate("simulate"),
    ForceSimulate("force_simulate"),
    Execute("execute"),
    ForceExecute("force_execute"),
    Skip("skip");
  private final String textRepresentation;

  private ActionExecutionMode(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public ActionExecutionMode fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, ActionExecutionMode, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "simulate": return ActionExecutionMode.Simulate;
      case "force_simulate": return ActionExecutionMode.ForceSimulate;
      case "execute": return ActionExecutionMode.Execute;
      case "force_execute": return ActionExecutionMode.ForceExecute;
      case "skip": return ActionExecutionMode.Skip;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, ActionExecutionMode.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
