
package org.elasticsearch.x_pack.machine_learning.job.detectors;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum AppliesTo implements XContentable<AppliesTo> {
  Actual("actual"),
    Typical("typical"),
    DiffFromTypical("diff_from_typical"),
    Time("time");
  private final String textRepresentation;

  private AppliesTo(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public AppliesTo fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, AppliesTo, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "actual": return AppliesTo.Actual;
      case "typical": return AppliesTo.Typical;
      case "diff_from_typical": return AppliesTo.DiffFromTypical;
      case "time": return AppliesTo.Time;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, AppliesTo.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
