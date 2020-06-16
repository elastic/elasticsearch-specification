
package org.elasticsearch.aggregations.bucket.geo_hash_grid;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum GeoHashPrecision implements XContentable<GeoHashPrecision> {
  Precision1("Precision1"),
    Precision2("Precision2"),
    Precision3("Precision3"),
    Precision4("Precision4"),
    Precision5("Precision5"),
    Precision6("Precision6"),
    Precision7("Precision7"),
    Precision8("Precision8"),
    Precision9("Precision9"),
    Precision10("Precision10"),
    Precision11("Precision11"),
    Precision12("Precision12");
  private final String textRepresentation;

  private GeoHashPrecision(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public GeoHashPrecision fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, GeoHashPrecision, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "Precision1": return GeoHashPrecision.Precision1;
      case "Precision2": return GeoHashPrecision.Precision2;
      case "Precision3": return GeoHashPrecision.Precision3;
      case "Precision4": return GeoHashPrecision.Precision4;
      case "Precision5": return GeoHashPrecision.Precision5;
      case "Precision6": return GeoHashPrecision.Precision6;
      case "Precision7": return GeoHashPrecision.Precision7;
      case "Precision8": return GeoHashPrecision.Precision8;
      case "Precision9": return GeoHashPrecision.Precision9;
      case "Precision10": return GeoHashPrecision.Precision10;
      case "Precision11": return GeoHashPrecision.Precision11;
      case "Precision12": return GeoHashPrecision.Precision12;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, GeoHashPrecision.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
