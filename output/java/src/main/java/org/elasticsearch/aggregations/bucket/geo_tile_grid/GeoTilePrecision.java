
package org.elasticsearch.aggregations.bucket.geo_tile_grid;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum GeoTilePrecision implements XContentable<GeoTilePrecision> {
  Precision0("Precision0"),
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
    Precision12("Precision12"),
    Precision13("Precision13"),
    Precision14("Precision14"),
    Precision15("Precision15"),
    Precision16("Precision16"),
    Precision17("Precision17"),
    Precision18("Precision18"),
    Precision19("Precision19"),
    Precision20("Precision20"),
    Precision21("Precision21"),
    Precision22("Precision22"),
    Precision23("Precision23"),
    Precision24("Precision24"),
    Precision25("Precision25"),
    Precision26("Precision26"),
    Precision27("Precision27"),
    Precision28("Precision28"),
    Precision29("Precision29");
  private final String textRepresentation;

  private GeoTilePrecision(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public GeoTilePrecision fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, GeoTilePrecision, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "Precision0": return GeoTilePrecision.Precision0;
      case "Precision1": return GeoTilePrecision.Precision1;
      case "Precision2": return GeoTilePrecision.Precision2;
      case "Precision3": return GeoTilePrecision.Precision3;
      case "Precision4": return GeoTilePrecision.Precision4;
      case "Precision5": return GeoTilePrecision.Precision5;
      case "Precision6": return GeoTilePrecision.Precision6;
      case "Precision7": return GeoTilePrecision.Precision7;
      case "Precision8": return GeoTilePrecision.Precision8;
      case "Precision9": return GeoTilePrecision.Precision9;
      case "Precision10": return GeoTilePrecision.Precision10;
      case "Precision11": return GeoTilePrecision.Precision11;
      case "Precision12": return GeoTilePrecision.Precision12;
      case "Precision13": return GeoTilePrecision.Precision13;
      case "Precision14": return GeoTilePrecision.Precision14;
      case "Precision15": return GeoTilePrecision.Precision15;
      case "Precision16": return GeoTilePrecision.Precision16;
      case "Precision17": return GeoTilePrecision.Precision17;
      case "Precision18": return GeoTilePrecision.Precision18;
      case "Precision19": return GeoTilePrecision.Precision19;
      case "Precision20": return GeoTilePrecision.Precision20;
      case "Precision21": return GeoTilePrecision.Precision21;
      case "Precision22": return GeoTilePrecision.Precision22;
      case "Precision23": return GeoTilePrecision.Precision23;
      case "Precision24": return GeoTilePrecision.Precision24;
      case "Precision25": return GeoTilePrecision.Precision25;
      case "Precision26": return GeoTilePrecision.Precision26;
      case "Precision27": return GeoTilePrecision.Precision27;
      case "Precision28": return GeoTilePrecision.Precision28;
      case "Precision29": return GeoTilePrecision.Precision29;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, GeoTilePrecision.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
