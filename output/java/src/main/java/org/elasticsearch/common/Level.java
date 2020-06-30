
package org.elasticsearch.common;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum Level implements XContentable<Level> {
  Cluster("cluster"),
    Indices("indices"),
    Shards("shards");
  private final String textRepresentation;

  private Level(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public Level fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, Level, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "cluster": return Level.Cluster;
      case "indices": return Level.Indices;
      case "shards": return Level.Shards;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, Level.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
