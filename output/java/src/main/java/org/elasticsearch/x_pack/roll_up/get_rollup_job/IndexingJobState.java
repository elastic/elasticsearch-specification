
package org.elasticsearch.x_pack.roll_up.get_rollup_job;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum IndexingJobState implements XContentable<IndexingJobState> {
  Started("started"),
    Indexing("indexing"),
    Stopping("stopping"),
    Stopped("stopped"),
    Aborting("aborting");
  private final String textRepresentation;

  private IndexingJobState(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public IndexingJobState fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, IndexingJobState, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "started": return IndexingJobState.Started;
      case "indexing": return IndexingJobState.Indexing;
      case "stopping": return IndexingJobState.Stopping;
      case "stopped": return IndexingJobState.Stopped;
      case "aborting": return IndexingJobState.Aborting;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, IndexingJobState.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
