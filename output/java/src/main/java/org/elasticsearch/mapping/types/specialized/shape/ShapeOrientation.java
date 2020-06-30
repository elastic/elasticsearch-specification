
package org.elasticsearch.mapping.types.specialized.shape;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum ShapeOrientation implements XContentable<ShapeOrientation> {
  ClockWise("ClockWise"),
    CounterClockWise("CounterClockWise");
  private final String textRepresentation;

  private ShapeOrientation(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public ShapeOrientation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, ShapeOrientation, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "ClockWise": return ShapeOrientation.ClockWise;
      case "CounterClockWise": return ShapeOrientation.CounterClockWise;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, ShapeOrientation.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
