
package org.elasticsearch.analysis.plugins.icu.collation;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum IcuCollationAlternate implements XContentable<IcuCollationAlternate> {
  Shifted("shifted"),
    NonIgnorable("non-ignorable");
  private final String textRepresentation;

  private IcuCollationAlternate(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public IcuCollationAlternate fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, IcuCollationAlternate, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "shifted": return IcuCollationAlternate.Shifted;
      case "non-ignorable": return IcuCollationAlternate.NonIgnorable;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, IcuCollationAlternate.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
