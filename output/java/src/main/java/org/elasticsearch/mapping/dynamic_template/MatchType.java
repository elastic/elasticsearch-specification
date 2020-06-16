
package org.elasticsearch.mapping.dynamic_template;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum MatchType implements XContentable<MatchType> {
  Simple("simple"),
    Regex("regex");
  private final String textRepresentation;

  private MatchType(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public MatchType fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, MatchType, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "simple": return MatchType.Simple;
      case "regex": return MatchType.Regex;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, MatchType.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
