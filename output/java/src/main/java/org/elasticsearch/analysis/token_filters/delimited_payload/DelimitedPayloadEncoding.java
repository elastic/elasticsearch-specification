
package org.elasticsearch.analysis.token_filters.delimited_payload;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum DelimitedPayloadEncoding implements XContentable<DelimitedPayloadEncoding> {
  Int("int"),
    Float("float"),
    Identity("identity");
  private final String textRepresentation;

  private DelimitedPayloadEncoding(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public DelimitedPayloadEncoding fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, DelimitedPayloadEncoding, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "int": return DelimitedPayloadEncoding.Int;
      case "float": return DelimitedPayloadEncoding.Float;
      case "identity": return DelimitedPayloadEncoding.Identity;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, DelimitedPayloadEncoding.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
