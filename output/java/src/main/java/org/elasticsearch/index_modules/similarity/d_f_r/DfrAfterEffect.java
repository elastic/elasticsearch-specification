
package org.elasticsearch.index_modules.similarity.d_f_r;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum DfrAfterEffect implements XContentable<DfrAfterEffect> {
  No("no"),
    B("b"),
    L("l");
  private final String textRepresentation;

  private DfrAfterEffect(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public DfrAfterEffect fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, DfrAfterEffect, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "no": return DfrAfterEffect.No;
      case "b": return DfrAfterEffect.B;
      case "l": return DfrAfterEffect.L;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, DfrAfterEffect.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
