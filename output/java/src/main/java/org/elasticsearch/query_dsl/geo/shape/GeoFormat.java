
package org.elasticsearch.query_dsl.geo.shape;

//
// Generated code - Do not edit (enum)
//

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum GeoFormat implements XContentable<GeoFormat> {
  GeoJson("GeoJson"),
    WellKnownText("WellKnownText");
  private final String textRepresentation;

  private GeoFormat(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public GeoFormat fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, GeoFormat, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "GeoJson": return GeoFormat.GeoJson;
      case "WellKnownText": return GeoFormat.WellKnownText;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, GeoFormat.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
