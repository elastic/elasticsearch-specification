
package org.elasticsearch.index_modules.similarity;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum Normalization implements XContentable<Normalization> {
  No("no"),
    H1("h1"),
    H2("h2"),
    H3("h3"),
    Z("z");
  private final String textRepresentation;

  private Normalization(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public Normalization fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, Normalization, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "no": return Normalization.No;
      case "h1": return Normalization.H1;
      case "h2": return Normalization.H2;
      case "h3": return Normalization.H3;
      case "z": return Normalization.Z;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, Normalization.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
