
package org.elasticsearch.analysis.plugins.icu.collation;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum IcuCollationDecomposition implements XContentable<IcuCollationDecomposition> {
  No("no"),
    Identical("identical");
  private final String textRepresentation;

  private IcuCollationDecomposition(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public IcuCollationDecomposition fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, IcuCollationDecomposition, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "no": return IcuCollationDecomposition.No;
      case "identical": return IcuCollationDecomposition.Identical;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, IcuCollationDecomposition.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
