
package org.elasticsearch.x_pack.watcher.watcher_stats;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum ExecutionPhase implements XContentable<ExecutionPhase> {
  AwaitsExecution("awaits_execution"),
    Started("started"),
    Input("input"),
    Condition("condition"),
    Actions("actions"),
    WatchTransform("watch_transform"),
    Aborted("aborted"),
    Finished("finished");
  private final String textRepresentation;

  private ExecutionPhase(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public ExecutionPhase fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, ExecutionPhase, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "awaits_execution": return ExecutionPhase.AwaitsExecution;
      case "started": return ExecutionPhase.Started;
      case "input": return ExecutionPhase.Input;
      case "condition": return ExecutionPhase.Condition;
      case "actions": return ExecutionPhase.Actions;
      case "watch_transform": return ExecutionPhase.WatchTransform;
      case "aborted": return ExecutionPhase.Aborted;
      case "finished": return ExecutionPhase.Finished;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, ExecutionPhase.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
