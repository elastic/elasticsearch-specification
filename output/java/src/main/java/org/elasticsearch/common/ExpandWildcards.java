
package org.elasticsearch.common;

//
// Generated code - Do not edit (enum)
//

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum ExpandWildcards implements XContentable<ExpandWildcards> {
  Open("open"),
    Closed("closed"),
    Hidden("hidden"),
    None("none"),
    All("all");
  private final String textRepresentation;

  private ExpandWildcards(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public ExpandWildcards fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, ExpandWildcards, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "open": return ExpandWildcards.Open;
      case "closed": return ExpandWildcards.Closed;
      case "hidden": return ExpandWildcards.Hidden;
      case "none": return ExpandWildcards.None;
      case "all": return ExpandWildcards.All;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, ExpandWildcards.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
