
package org.elasticsearch.query_dsl.compound.function_score.functions;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum FunctionScoreMode implements XContentable<FunctionScoreMode> {
  Multiply("multiply"),
    Sum("sum"),
    Avg("avg"),
    First("first"),
    Max("max"),
    Min("min");
  private final String textRepresentation;

  private FunctionScoreMode(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public FunctionScoreMode fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, FunctionScoreMode, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "multiply": return FunctionScoreMode.Multiply;
      case "sum": return FunctionScoreMode.Sum;
      case "avg": return FunctionScoreMode.Avg;
      case "first": return FunctionScoreMode.First;
      case "max": return FunctionScoreMode.Max;
      case "min": return FunctionScoreMode.Min;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, FunctionScoreMode.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
