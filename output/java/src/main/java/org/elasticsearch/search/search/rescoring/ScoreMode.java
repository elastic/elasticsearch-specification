
package org.elasticsearch.search.search.rescoring;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum ScoreMode implements XContentable<ScoreMode> {
  Avg("avg"),
    Max("max"),
    Min("min"),
    Multiply("multiply"),
    Total("total");
  private final String textRepresentation;

  private ScoreMode(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public ScoreMode fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, ScoreMode, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "avg": return ScoreMode.Avg;
      case "max": return ScoreMode.Max;
      case "min": return ScoreMode.Min;
      case "multiply": return ScoreMode.Multiply;
      case "total": return ScoreMode.Total;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, ScoreMode.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
