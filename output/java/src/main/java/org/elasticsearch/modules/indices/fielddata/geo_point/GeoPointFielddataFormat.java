
package org.elasticsearch.modules.indices.fielddata.geo_point;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum GeoPointFielddataFormat implements XContentable<GeoPointFielddataFormat> {
  Array("array"),
    DocValues("doc_values"),
    Compressed("compressed"),
    Disabled("disabled");
  private final String textRepresentation;

  private GeoPointFielddataFormat(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public GeoPointFielddataFormat fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, GeoPointFielddataFormat, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "array": return GeoPointFielddataFormat.Array;
      case "doc_values": return GeoPointFielddataFormat.DocValues;
      case "compressed": return GeoPointFielddataFormat.Compressed;
      case "disabled": return GeoPointFielddataFormat.Disabled;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, GeoPointFielddataFormat.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
