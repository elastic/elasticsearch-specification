
package org.elasticsearch.x_pack.machine_learning.put_job;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum ExcludeFrequent implements XContentable<ExcludeFrequent> {
  All("all"),
    None("none"),
    By("by"),
    Over("over");
  private final String textRepresentation;

  private ExcludeFrequent(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public ExcludeFrequent fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, ExcludeFrequent, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "all": return ExcludeFrequent.All;
      case "none": return ExcludeFrequent.None;
      case "by": return ExcludeFrequent.By;
      case "over": return ExcludeFrequent.Over;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, ExcludeFrequent.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
