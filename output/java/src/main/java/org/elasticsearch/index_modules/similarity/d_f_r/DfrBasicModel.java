
package org.elasticsearch.index_modules.similarity.d_f_r;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum DfrBasicModel implements XContentable<DfrBasicModel> {
  Be("be"),
    D("d"),
    G("g"),
    If("if"),
    In("in"),
    Ine("ine"),
    P("p");
  private final String textRepresentation;

  private DfrBasicModel(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public DfrBasicModel fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, DfrBasicModel, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "be": return DfrBasicModel.Be;
      case "d": return DfrBasicModel.D;
      case "g": return DfrBasicModel.G;
      case "if": return DfrBasicModel.If;
      case "in": return DfrBasicModel.In;
      case "ine": return DfrBasicModel.Ine;
      case "p": return DfrBasicModel.P;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, DfrBasicModel.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
