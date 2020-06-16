
package org.elasticsearch.ingest.processors.plugins.user_agent;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum UserAgentProperty implements XContentable<UserAgentProperty> {
  Name("NAME"),
    Major("MAJOR"),
    Minor("MINOR"),
    Patch("PATCH"),
    Os("OS"),
    OsName("OS_NAME"),
    OsMajor("OS_MAJOR"),
    OsMinor("OS_MINOR"),
    Device("DEVICE"),
    Build("BUILD");
  private final String textRepresentation;

  private UserAgentProperty(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public UserAgentProperty fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, UserAgentProperty, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "NAME": return UserAgentProperty.Name;
      case "MAJOR": return UserAgentProperty.Major;
      case "MINOR": return UserAgentProperty.Minor;
      case "PATCH": return UserAgentProperty.Patch;
      case "OS": return UserAgentProperty.Os;
      case "OS_NAME": return UserAgentProperty.OsName;
      case "OS_MAJOR": return UserAgentProperty.OsMajor;
      case "OS_MINOR": return UserAgentProperty.OsMinor;
      case "DEVICE": return UserAgentProperty.Device;
      case "BUILD": return UserAgentProperty.Build;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, UserAgentProperty.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
