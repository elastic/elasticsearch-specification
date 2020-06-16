
package org.elasticsearch.common;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum Size implements XContentable<Size> {
  Raw("Raw"),
    K("k"),
    M("m"),
    G("g"),
    T("t"),
    P("p");
  private final String textRepresentation;

  private Size(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public Size fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, Size, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "Raw": return Size.Raw;
      case "k": return Size.K;
      case "m": return Size.M;
      case "g": return Size.G;
      case "t": return Size.T;
      case "p": return Size.P;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, Size.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
