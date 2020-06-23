
package org.elasticsearch.index_modules.similarity.i_b;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum IbDistribution implements XContentable<IbDistribution> {
  Ll("ll"),
    Spl("spl");
  private final String textRepresentation;

  private IbDistribution(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public IbDistribution fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, IbDistribution, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "ll": return IbDistribution.Ll;
      case "spl": return IbDistribution.Spl;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, IbDistribution.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
