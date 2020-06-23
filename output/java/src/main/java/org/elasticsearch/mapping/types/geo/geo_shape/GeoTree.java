
package org.elasticsearch.mapping.types.geo.geo_shape;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum GeoTree implements XContentable<GeoTree> {
  Geohash("geohash"),
    Quadtree("quadtree");
  private final String textRepresentation;

  private GeoTree(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public GeoTree fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, GeoTree, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "geohash": return GeoTree.Geohash;
      case "quadtree": return GeoTree.Quadtree;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, GeoTree.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
