
package org.elasticsearch.x_pack.license.get_license;

//
// Generated code - Do not edit (enum)
//

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum LicenseType implements XContentable<LicenseType> {
  Missing("missing"),
    Trial("trial"),
    Basic("basic"),
    Standard("standard"),
    Dev("dev"),
    Silver("silver"),
    Gold("gold"),
    Platinum("platinum"),
    Enterprise("enterprise");
  private final String textRepresentation;

  private LicenseType(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public LicenseType fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, LicenseType, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "missing": return LicenseType.Missing;
      case "trial": return LicenseType.Trial;
      case "basic": return LicenseType.Basic;
      case "standard": return LicenseType.Standard;
      case "dev": return LicenseType.Dev;
      case "silver": return LicenseType.Silver;
      case "gold": return LicenseType.Gold;
      case "platinum": return LicenseType.Platinum;
      case "enterprise": return LicenseType.Enterprise;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, LicenseType.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
