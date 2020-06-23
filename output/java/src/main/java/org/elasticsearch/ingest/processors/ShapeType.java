
package org.elasticsearch.ingest.processors;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum ShapeType implements XContentable<ShapeType> {
  GeoShape("geo_shape"),
    Shape("shape");
  private final String textRepresentation;

  private ShapeType(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public ShapeType fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, ShapeType, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "geo_shape": return ShapeType.GeoShape;
      case "shape": return ShapeType.Shape;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, ShapeType.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
