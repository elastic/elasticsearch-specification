
package org.elasticsearch.analysis.plugins.icu.normalization;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum IcuNormalizationType implements XContentable<IcuNormalizationType> {
  Nfc("nfc"),
    Nfkc("nfkc"),
    NfkcCf("nfkc_cf");
  private final String textRepresentation;

  private IcuNormalizationType(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public IcuNormalizationType fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, IcuNormalizationType, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "nfc": return IcuNormalizationType.Nfc;
      case "nfkc": return IcuNormalizationType.Nfkc;
      case "nfkc_cf": return IcuNormalizationType.NfkcCf;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, IcuNormalizationType.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
