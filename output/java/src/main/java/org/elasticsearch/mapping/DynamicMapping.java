
package org.elasticsearch.mapping;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum DynamicMapping implements XContentable<DynamicMapping> {
  Strict("strict");
  private final String textRepresentation;

  private DynamicMapping(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public DynamicMapping fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, DynamicMapping, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "strict": return DynamicMapping.Strict;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, DynamicMapping.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
