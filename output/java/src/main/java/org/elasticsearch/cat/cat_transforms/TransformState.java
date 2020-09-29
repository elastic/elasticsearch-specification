
package org.elasticsearch.cat.cat_transforms;

//
// Generated code - Do not edit (enum)
//

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum TransformState implements XContentable<TransformState> {
  Started("STARTED"),
    Indexing("INDEXING"),
    Aborting("ABORTING"),
    Stopping("STOPPING"),
    Stopped("STOPPED"),
    Failed("FAILED");
  private final String textRepresentation;

  private TransformState(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public TransformState fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, TransformState, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "STARTED": return TransformState.Started;
      case "INDEXING": return TransformState.Indexing;
      case "ABORTING": return TransformState.Aborting;
      case "STOPPING": return TransformState.Stopping;
      case "STOPPED": return TransformState.Stopped;
      case "FAILED": return TransformState.Failed;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, TransformState.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
