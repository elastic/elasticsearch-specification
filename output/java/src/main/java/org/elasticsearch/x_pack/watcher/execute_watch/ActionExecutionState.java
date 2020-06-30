
package org.elasticsearch.x_pack.watcher.execute_watch;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum ActionExecutionState implements XContentable<ActionExecutionState> {
  AwaitsExecution("awaits_execution"),
    Checking("checking"),
    ExecutionNotNeeded("execution_not_needed"),
    Throttled("throttled"),
    Executed("executed"),
    Failed("failed"),
    DeletedWhileQueued("deleted_while_queued"),
    NotExecutedAlreadyQueued("not_executed_already_queued");
  private final String textRepresentation;

  private ActionExecutionState(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public ActionExecutionState fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, ActionExecutionState, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "awaits_execution": return ActionExecutionState.AwaitsExecution;
      case "checking": return ActionExecutionState.Checking;
      case "execution_not_needed": return ActionExecutionState.ExecutionNotNeeded;
      case "throttled": return ActionExecutionState.Throttled;
      case "executed": return ActionExecutionState.Executed;
      case "failed": return ActionExecutionState.Failed;
      case "deleted_while_queued": return ActionExecutionState.DeletedWhileQueued;
      case "not_executed_already_queued": return ActionExecutionState.NotExecutedAlreadyQueued;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, ActionExecutionState.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
