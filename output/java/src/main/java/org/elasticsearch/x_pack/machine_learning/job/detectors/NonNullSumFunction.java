
package org.elasticsearch.x_pack.machine_learning.job.detectors;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum NonNullSumFunction implements XContentable<NonNullSumFunction> {
  NonNullSum("NonNullSum"),
    HighNonNullSum("HighNonNullSum"),
    LowNonNullSum("LowNonNullSum");
  private final String textRepresentation;

  private NonNullSumFunction(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public NonNullSumFunction fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, NonNullSumFunction, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "NonNullSum": return NonNullSumFunction.NonNullSum;
      case "HighNonNullSum": return NonNullSumFunction.HighNonNullSum;
      case "LowNonNullSum": return NonNullSumFunction.LowNonNullSum;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, NonNullSumFunction.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
