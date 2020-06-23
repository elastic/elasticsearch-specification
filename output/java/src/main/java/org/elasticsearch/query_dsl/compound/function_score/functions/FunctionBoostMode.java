
package org.elasticsearch.query_dsl.compound.function_score.functions;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum FunctionBoostMode implements XContentable<FunctionBoostMode> {
  Multiply("multiply"),
    Replace("replace"),
    Sum("sum"),
    Avg("avg"),
    Max("max"),
    Min("min");
  private final String textRepresentation;

  private FunctionBoostMode(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public FunctionBoostMode fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, FunctionBoostMode, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "multiply": return FunctionBoostMode.Multiply;
      case "replace": return FunctionBoostMode.Replace;
      case "sum": return FunctionBoostMode.Sum;
      case "avg": return FunctionBoostMode.Avg;
      case "max": return FunctionBoostMode.Max;
      case "min": return FunctionBoostMode.Min;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, FunctionBoostMode.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
