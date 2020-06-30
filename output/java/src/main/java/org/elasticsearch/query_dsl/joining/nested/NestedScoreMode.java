
package org.elasticsearch.query_dsl.joining.nested;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum NestedScoreMode implements XContentable<NestedScoreMode> {
  Avg("avg"),
    Sum("sum"),
    Min("min"),
    Max("max"),
    None("none");
  private final String textRepresentation;

  private NestedScoreMode(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public NestedScoreMode fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, NestedScoreMode, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "avg": return NestedScoreMode.Avg;
      case "sum": return NestedScoreMode.Sum;
      case "min": return NestedScoreMode.Min;
      case "max": return NestedScoreMode.Max;
      case "none": return NestedScoreMode.None;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, NestedScoreMode.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
