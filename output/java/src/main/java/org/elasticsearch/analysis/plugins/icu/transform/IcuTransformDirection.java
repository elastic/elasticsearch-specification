
package org.elasticsearch.analysis.plugins.icu.transform;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum IcuTransformDirection implements XContentable<IcuTransformDirection> {
  Forward("forward"),
    Reverse("reverse");
  private final String textRepresentation;

  private IcuTransformDirection(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public IcuTransformDirection fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, IcuTransformDirection, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "forward": return IcuTransformDirection.Forward;
      case "reverse": return IcuTransformDirection.Reverse;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, IcuTransformDirection.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
