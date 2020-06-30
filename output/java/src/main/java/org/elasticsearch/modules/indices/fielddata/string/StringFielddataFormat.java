
package org.elasticsearch.modules.indices.fielddata.string;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum StringFielddataFormat implements XContentable<StringFielddataFormat> {
  PagedBytes("paged_bytes"),
    Disabled("disabled");
  private final String textRepresentation;

  private StringFielddataFormat(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public StringFielddataFormat fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, StringFielddataFormat, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "paged_bytes": return StringFielddataFormat.PagedBytes;
      case "disabled": return StringFielddataFormat.Disabled;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, StringFielddataFormat.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
