
package org.elasticsearch.x_pack.machine_learning.job.config;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum JobState implements XContentable<JobState> {
  Closing("closing"),
    Closed("closed"),
    Opened("opened"),
    Failed("failed"),
    Opening("opening");
  private final String textRepresentation;

  private JobState(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public JobState fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, JobState, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "closing": return JobState.Closing;
      case "closed": return JobState.Closed;
      case "opened": return JobState.Opened;
      case "failed": return JobState.Failed;
      case "opening": return JobState.Opening;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, JobState.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
