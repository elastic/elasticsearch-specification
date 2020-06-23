
package org.elasticsearch.common;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum Conflicts implements XContentable<Conflicts> {
  Abort("abort"),
    Proceed("proceed");
  private final String textRepresentation;

  private Conflicts(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public Conflicts fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, Conflicts, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "abort": return Conflicts.Abort;
      case "proceed": return Conflicts.Proceed;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, Conflicts.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
