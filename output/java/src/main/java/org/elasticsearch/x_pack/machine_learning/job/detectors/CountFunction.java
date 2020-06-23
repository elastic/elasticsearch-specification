
package org.elasticsearch.x_pack.machine_learning.job.detectors;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum CountFunction implements XContentable<CountFunction> {
  Count("Count"),
    HighCount("HighCount"),
    LowCount("LowCount");
  private final String textRepresentation;

  private CountFunction(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public CountFunction fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, CountFunction, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "Count": return CountFunction.Count;
      case "HighCount": return CountFunction.HighCount;
      case "LowCount": return CountFunction.LowCount;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, CountFunction.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
