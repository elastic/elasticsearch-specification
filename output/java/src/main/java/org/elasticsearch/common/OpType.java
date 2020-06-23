
package org.elasticsearch.common;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum OpType implements XContentable<OpType> {
  Index("index"),
    Create("create");
  private final String textRepresentation;

  private OpType(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public OpType fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, OpType, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "index": return OpType.Index;
      case "create": return OpType.Create;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, OpType.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
