
package org.elasticsearch.query_dsl.geo;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum GeoValidationMethod implements XContentable<GeoValidationMethod> {
  Coerce("coerce"),
    IgnoreMalformed("ignore_malformed"),
    Strict("strict");
  private final String textRepresentation;

  private GeoValidationMethod(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public GeoValidationMethod fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, GeoValidationMethod, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "coerce": return GeoValidationMethod.Coerce;
      case "ignore_malformed": return GeoValidationMethod.IgnoreMalformed;
      case "strict": return GeoValidationMethod.Strict;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, GeoValidationMethod.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
