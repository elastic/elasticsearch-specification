
package org.elasticsearch.x_pack.watcher.schedule;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum Month implements XContentable<Month> {
  January("january"),
    February("february"),
    March("march"),
    April("april"),
    May("may"),
    June("june"),
    July("july"),
    August("august"),
    September("september"),
    October("october"),
    November("november"),
    December("december");
  private final String textRepresentation;

  private Month(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public Month fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, Month, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "january": return Month.January;
      case "february": return Month.February;
      case "march": return Month.March;
      case "april": return Month.April;
      case "may": return Month.May;
      case "june": return Month.June;
      case "july": return Month.July;
      case "august": return Month.August;
      case "september": return Month.September;
      case "october": return Month.October;
      case "november": return Month.November;
      case "december": return Month.December;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, Month.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
