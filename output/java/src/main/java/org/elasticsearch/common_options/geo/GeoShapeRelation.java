
package org.elasticsearch.common_options.geo;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum GeoShapeRelation implements XContentable<GeoShapeRelation> {
  Intersects("intersects"),
    Disjoint("disjoint"),
    Within("within"),
    Contains("contains");
  private final String textRepresentation;

  private GeoShapeRelation(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public GeoShapeRelation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, GeoShapeRelation, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "intersects": return GeoShapeRelation.Intersects;
      case "disjoint": return GeoShapeRelation.Disjoint;
      case "within": return GeoShapeRelation.Within;
      case "contains": return GeoShapeRelation.Contains;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, GeoShapeRelation.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
