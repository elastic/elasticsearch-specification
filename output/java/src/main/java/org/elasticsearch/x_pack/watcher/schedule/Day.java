
package org.elasticsearch.x_pack.watcher.schedule;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum Day implements XContentable<Day> {
  Sunday("sunday"),
    Monday("monday"),
    Tuesday("tuesday"),
    Wednesday("wednesday"),
    Thursday("thursday"),
    Friday("friday"),
    Saturday("saturday");
  private final String textRepresentation;

  private Day(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public Day fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, Day, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "sunday": return Day.Sunday;
      case "monday": return Day.Monday;
      case "tuesday": return Day.Tuesday;
      case "wednesday": return Day.Wednesday;
      case "thursday": return Day.Thursday;
      case "friday": return Day.Friday;
      case "saturday": return Day.Saturday;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, Day.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
