
package org.elasticsearch.x_pack.license.get_license;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum LicenseStatus implements XContentable<LicenseStatus> {
  Active("active"),
    Valid("valid"),
    Invalid("invalid"),
    Expired("expired");
  private final String textRepresentation;

  private LicenseStatus(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public LicenseStatus fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, LicenseStatus, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "active": return LicenseStatus.Active;
      case "valid": return LicenseStatus.Valid;
      case "invalid": return LicenseStatus.Invalid;
      case "expired": return LicenseStatus.Expired;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, LicenseStatus.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
