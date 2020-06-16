
package org.elasticsearch.aggregations.pipeline.moving_average.models;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum HoltWintersType implements XContentable<HoltWintersType> {
  Add("add"),
    Mult("mult");
  private final String textRepresentation;

  private HoltWintersType(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public HoltWintersType fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, HoltWintersType, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "add": return HoltWintersType.Add;
      case "mult": return HoltWintersType.Mult;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, HoltWintersType.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
