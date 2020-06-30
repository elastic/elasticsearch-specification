
package org.elasticsearch.common;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum ThreadType implements XContentable<ThreadType> {
  Cpu("cpu"),
    Wait("wait"),
    Block("block");
  private final String textRepresentation;

  private ThreadType(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public ThreadType fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, ThreadType, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "cpu": return ThreadType.Cpu;
      case "wait": return ThreadType.Wait;
      case "block": return ThreadType.Block;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, ThreadType.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
