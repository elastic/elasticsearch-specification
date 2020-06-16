
package org.elasticsearch.x_pack.machine_learning.job.detectors;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum TimeFunction implements XContentable<TimeFunction> {
  TimeOfDay("TimeOfDay"),
    TimeOfWeek("TimeOfWeek");
  private final String textRepresentation;

  private TimeFunction(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public TimeFunction fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, TimeFunction, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "TimeOfDay": return TimeFunction.TimeOfDay;
      case "TimeOfWeek": return TimeFunction.TimeOfWeek;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, TimeFunction.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
