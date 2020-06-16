
package org.elasticsearch.index_modules.similarity.d_f_i;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum DfiIndependenceMeasure implements XContentable<DfiIndependenceMeasure> {
  Standardized("standardized"),
    Saturated("saturated"),
    Chisquared("chisquared");
  private final String textRepresentation;

  private DfiIndependenceMeasure(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public DfiIndependenceMeasure fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, DfiIndependenceMeasure, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "standardized": return DfiIndependenceMeasure.Standardized;
      case "saturated": return DfiIndependenceMeasure.Saturated;
      case "chisquared": return DfiIndependenceMeasure.Chisquared;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, DfiIndependenceMeasure.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
