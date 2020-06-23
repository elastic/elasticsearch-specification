
package org.elasticsearch.x_pack.machine_learning.job.detectors;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum InfoContentFunction implements XContentable<InfoContentFunction> {
  InfoContent("InfoContent"),
    HighInfoContent("HighInfoContent"),
    LowInfoContent("LowInfoContent");
  private final String textRepresentation;

  private InfoContentFunction(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public InfoContentFunction fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, InfoContentFunction, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "InfoContent": return InfoContentFunction.InfoContent;
      case "HighInfoContent": return InfoContentFunction.HighInfoContent;
      case "LowInfoContent": return InfoContentFunction.LowInfoContent;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, InfoContentFunction.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
