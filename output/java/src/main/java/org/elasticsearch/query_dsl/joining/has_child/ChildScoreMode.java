
package org.elasticsearch.query_dsl.joining.has_child;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum ChildScoreMode implements XContentable<ChildScoreMode> {
  None("none"),
    Avg("avg"),
    Sum("sum"),
    Max("max"),
    Min("min");
  private final String textRepresentation;

  private ChildScoreMode(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public ChildScoreMode fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, ChildScoreMode, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "none": return ChildScoreMode.None;
      case "avg": return ChildScoreMode.Avg;
      case "sum": return ChildScoreMode.Sum;
      case "max": return ChildScoreMode.Max;
      case "min": return ChildScoreMode.Min;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, ChildScoreMode.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
