
package org.elasticsearch.common;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum GroupBy implements XContentable<GroupBy> {
  Nodes("nodes"),
    Parents("parents"),
    None("none");
  private final String textRepresentation;

  private GroupBy(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public GroupBy fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, GroupBy, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "nodes": return GroupBy.Nodes;
      case "parents": return GroupBy.Parents;
      case "none": return GroupBy.None;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, GroupBy.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
