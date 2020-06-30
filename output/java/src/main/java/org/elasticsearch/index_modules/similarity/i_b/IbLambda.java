
package org.elasticsearch.index_modules.similarity.i_b;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum IbLambda implements XContentable<IbLambda> {
  Df("df"),
    Ttf("ttf");
  private final String textRepresentation;

  private IbLambda(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public IbLambda fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, IbLambda, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "df": return IbLambda.Df;
      case "ttf": return IbLambda.Ttf;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, IbLambda.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
