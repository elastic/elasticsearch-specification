
package org.elasticsearch.x_pack.machine_learning.job.detectors;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum NonZeroCountFunction implements XContentable<NonZeroCountFunction> {
  NonZeroCount("NonZeroCount"),
    LowNonZeroCount("LowNonZeroCount"),
    HighNonZeroCount("HighNonZeroCount");
  private final String textRepresentation;

  private NonZeroCountFunction(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public NonZeroCountFunction fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, NonZeroCountFunction, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "NonZeroCount": return NonZeroCountFunction.NonZeroCount;
      case "LowNonZeroCount": return NonZeroCountFunction.LowNonZeroCount;
      case "HighNonZeroCount": return NonZeroCountFunction.HighNonZeroCount;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, NonZeroCountFunction.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
