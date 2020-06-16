
package org.elasticsearch.x_pack.migration.deprecation_info;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum DeprecationWarningLevel implements XContentable<DeprecationWarningLevel> {
  None("none"),
    Info("info"),
    Warning("warning"),
    Critical("critical");
  private final String textRepresentation;

  private DeprecationWarningLevel(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public DeprecationWarningLevel fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, DeprecationWarningLevel, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "none": return DeprecationWarningLevel.None;
      case "info": return DeprecationWarningLevel.Info;
      case "warning": return DeprecationWarningLevel.Warning;
      case "critical": return DeprecationWarningLevel.Critical;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, DeprecationWarningLevel.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
