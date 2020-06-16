
package org.elasticsearch.common_options.geo;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum GeoDistanceType implements XContentable<GeoDistanceType> {
  Arc("arc"),
    Plane("plane");
  private final String textRepresentation;

  private GeoDistanceType(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public GeoDistanceType fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, GeoDistanceType, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "arc": return GeoDistanceType.Arc;
      case "plane": return GeoDistanceType.Plane;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, GeoDistanceType.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
