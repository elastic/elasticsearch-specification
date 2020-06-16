
package org.elasticsearch.common_options.date_math;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum DateMathOperation implements XContentable<DateMathOperation> {
  Add("+"),
    Subtract("-");
  private final String textRepresentation;

  private DateMathOperation(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public DateMathOperation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, DateMathOperation, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "+": return DateMathOperation.Add;
      case "-": return DateMathOperation.Subtract;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, DateMathOperation.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
