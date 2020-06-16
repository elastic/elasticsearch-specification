
package org.elasticsearch.common;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum VersionType implements XContentable<VersionType> {
  Internal("internal"),
    External("external"),
    ExternalGte("external_gte"),
    Force("force");
  private final String textRepresentation;

  private VersionType(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public VersionType fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, VersionType, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "internal": return VersionType.Internal;
      case "external": return VersionType.External;
      case "external_gte": return VersionType.ExternalGte;
      case "force": return VersionType.Force;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, VersionType.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
