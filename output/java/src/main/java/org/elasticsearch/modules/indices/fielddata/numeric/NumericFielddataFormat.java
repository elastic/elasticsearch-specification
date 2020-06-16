
package org.elasticsearch.modules.indices.fielddata.numeric;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum NumericFielddataFormat implements XContentable<NumericFielddataFormat> {
  Array("array"),
    Disabled("disabled");
  private final String textRepresentation;

  private NumericFielddataFormat(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public NumericFielddataFormat fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, NumericFielddataFormat, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "array": return NumericFielddataFormat.Array;
      case "disabled": return NumericFielddataFormat.Disabled;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, NumericFielddataFormat.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
