
package org.elasticsearch.analysis.token_filters;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum KeepTypesMode implements XContentable<KeepTypesMode> {
  Include("include"),
    Exclude("exclude");
  private final String textRepresentation;

  private KeepTypesMode(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public KeepTypesMode fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, KeepTypesMode, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "include": return KeepTypesMode.Include;
      case "exclude": return KeepTypesMode.Exclude;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, KeepTypesMode.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
