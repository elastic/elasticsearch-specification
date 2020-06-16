
package org.elasticsearch.x_pack.watcher.condition;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum Quantifier implements XContentable<Quantifier> {
  Some("some"),
    All("all");
  private final String textRepresentation;

  private Quantifier(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public Quantifier fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, Quantifier, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "some": return Quantifier.Some;
      case "all": return Quantifier.All;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, Quantifier.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
