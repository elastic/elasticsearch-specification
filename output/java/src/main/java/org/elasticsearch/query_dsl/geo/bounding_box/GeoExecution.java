
package org.elasticsearch.query_dsl.geo.bounding_box;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum GeoExecution implements XContentable<GeoExecution> {
  Memory("memory"),
    Indexed("indexed");
  private final String textRepresentation;

  private GeoExecution(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public GeoExecution fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, GeoExecution, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "memory": return GeoExecution.Memory;
      case "indexed": return GeoExecution.Indexed;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, GeoExecution.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
