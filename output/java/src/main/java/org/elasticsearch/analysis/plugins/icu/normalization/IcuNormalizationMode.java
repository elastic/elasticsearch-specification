
package org.elasticsearch.analysis.plugins.icu.normalization;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum IcuNormalizationMode implements XContentable<IcuNormalizationMode> {
  Decompose("decompose"),
    Compose("compose");
  private final String textRepresentation;

  private IcuNormalizationMode(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public IcuNormalizationMode fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, IcuNormalizationMode, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "decompose": return IcuNormalizationMode.Decompose;
      case "compose": return IcuNormalizationMode.Compose;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, IcuNormalizationMode.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
