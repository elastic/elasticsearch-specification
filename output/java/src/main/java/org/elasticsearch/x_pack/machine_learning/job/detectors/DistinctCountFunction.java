
package org.elasticsearch.x_pack.machine_learning.job.detectors;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum DistinctCountFunction implements XContentable<DistinctCountFunction> {
  DistinctCount("DistinctCount"),
    LowDistinctCount("LowDistinctCount"),
    HighDistinctCount("HighDistinctCount");
  private final String textRepresentation;

  private DistinctCountFunction(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public DistinctCountFunction fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, DistinctCountFunction, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "DistinctCount": return DistinctCountFunction.DistinctCount;
      case "LowDistinctCount": return DistinctCountFunction.LowDistinctCount;
      case "HighDistinctCount": return DistinctCountFunction.HighDistinctCount;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, DistinctCountFunction.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
