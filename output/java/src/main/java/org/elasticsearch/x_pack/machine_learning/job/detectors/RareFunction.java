
package org.elasticsearch.x_pack.machine_learning.job.detectors;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum RareFunction implements XContentable<RareFunction> {
  Rare("Rare"),
    FreqRare("FreqRare");
  private final String textRepresentation;

  private RareFunction(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public RareFunction fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, RareFunction, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "Rare": return RareFunction.Rare;
      case "FreqRare": return RareFunction.FreqRare;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, RareFunction.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
