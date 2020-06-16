
package org.elasticsearch.mapping.types.geo.geo_shape;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum GeoStrategy implements XContentable<GeoStrategy> {
  Recursive("recursive"),
    Term("term");
  private final String textRepresentation;

  private GeoStrategy(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public GeoStrategy fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, GeoStrategy, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "recursive": return GeoStrategy.Recursive;
      case "term": return GeoStrategy.Term;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, GeoStrategy.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
