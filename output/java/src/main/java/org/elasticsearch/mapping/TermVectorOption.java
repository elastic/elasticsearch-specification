
package org.elasticsearch.mapping;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum TermVectorOption implements XContentable<TermVectorOption> {
  No("no"),
    Yes("yes"),
    WithOffsets("with_offsets"),
    WithPositions("with_positions"),
    WithPositionsOffsets("with_positions_offsets"),
    WithPositionsOffsetsPayloads("with_positions_offsets_payloads");
  private final String textRepresentation;

  private TermVectorOption(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public TermVectorOption fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, TermVectorOption, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "no": return TermVectorOption.No;
      case "yes": return TermVectorOption.Yes;
      case "with_offsets": return TermVectorOption.WithOffsets;
      case "with_positions": return TermVectorOption.WithPositions;
      case "with_positions_offsets": return TermVectorOption.WithPositionsOffsets;
      case "with_positions_offsets_payloads": return TermVectorOption.WithPositionsOffsetsPayloads;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, TermVectorOption.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
