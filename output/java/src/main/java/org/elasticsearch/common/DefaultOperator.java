
package org.elasticsearch.common;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum DefaultOperator implements XContentable<DefaultOperator> {
  And("AND"),
    Or("OR");
  private final String textRepresentation;

  private DefaultOperator(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public DefaultOperator fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, DefaultOperator, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "AND": return DefaultOperator.And;
      case "OR": return DefaultOperator.Or;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, DefaultOperator.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
