
package org.elasticsearch.x_pack.security.user.get_user_access_token;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum AccessTokenGrantType implements XContentable<AccessTokenGrantType> {
  Password("password");
  private final String textRepresentation;

  private AccessTokenGrantType(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public AccessTokenGrantType fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, AccessTokenGrantType, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "password": return AccessTokenGrantType.Password;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, AccessTokenGrantType.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
