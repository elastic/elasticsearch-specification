
package org.elasticsearch.common_options.geo;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum DistanceUnit implements XContentable<DistanceUnit> {
  In("in"),
    Ft("ft"),
    Yd("yd"),
    Mi("mi"),
    Nmi("nmi"),
    Km("km"),
    M("m"),
    Cm("cm"),
    Mm("mm");
  private final String textRepresentation;

  private DistanceUnit(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public DistanceUnit fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, DistanceUnit, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "in": return DistanceUnit.In;
      case "ft": return DistanceUnit.Ft;
      case "yd": return DistanceUnit.Yd;
      case "mi": return DistanceUnit.Mi;
      case "nmi": return DistanceUnit.Nmi;
      case "km": return DistanceUnit.Km;
      case "m": return DistanceUnit.M;
      case "cm": return DistanceUnit.Cm;
      case "mm": return DistanceUnit.Mm;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, DistanceUnit.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
