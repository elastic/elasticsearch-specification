
package org.elasticsearch.analysis.plugins.icu.collation;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum IcuCollationStrength implements XContentable<IcuCollationStrength> {
  Primary("primary"),
    Secondary("secondary"),
    Tertiary("tertiary"),
    Quaternary("quaternary"),
    Identical("identical");
  private final String textRepresentation;

  private IcuCollationStrength(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public IcuCollationStrength fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, IcuCollationStrength, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "primary": return IcuCollationStrength.Primary;
      case "secondary": return IcuCollationStrength.Secondary;
      case "tertiary": return IcuCollationStrength.Tertiary;
      case "quaternary": return IcuCollationStrength.Quaternary;
      case "identical": return IcuCollationStrength.Identical;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, IcuCollationStrength.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
