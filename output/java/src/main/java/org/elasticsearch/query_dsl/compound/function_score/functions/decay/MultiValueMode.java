
package org.elasticsearch.query_dsl.compound.function_score.functions.decay;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum MultiValueMode implements XContentable<MultiValueMode> {
  Min("min"),
    Max("max"),
    Avg("avg"),
    Sum("sum");
  private final String textRepresentation;

  private MultiValueMode(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public MultiValueMode fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, MultiValueMode, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "min": return MultiValueMode.Min;
      case "max": return MultiValueMode.Max;
      case "avg": return MultiValueMode.Avg;
      case "sum": return MultiValueMode.Sum;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, MultiValueMode.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
