
package org.elasticsearch.query_dsl.term_level.range;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum RangeRelation implements XContentable<RangeRelation> {
  Within("within"),
    Contains("contains"),
    Intersects("intersects");
  private final String textRepresentation;

  private RangeRelation(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public RangeRelation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, RangeRelation, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "within": return RangeRelation.Within;
      case "contains": return RangeRelation.Contains;
      case "intersects": return RangeRelation.Intersects;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, RangeRelation.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
