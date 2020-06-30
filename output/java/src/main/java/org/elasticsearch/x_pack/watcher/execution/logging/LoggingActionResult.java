
package org.elasticsearch.x_pack.watcher.execution.logging;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.Either;
import org.elasticsearch.XContentable;
import org.elasticsearch.NamedContainer;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;


public class LoggingActionResult  implements XContentable<LoggingActionResult> {
  
  static final ParseField LOGGED_TEXT = new ParseField("logged_text");
  private String _loggedText;
  public String getLoggedText() { return this._loggedText; }
  public LoggingActionResult setLoggedText(String val) { this._loggedText = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_loggedText != null) {
      builder.field(LOGGED_TEXT.getPreferredName(), _loggedText);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public LoggingActionResult fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return LoggingActionResult.PARSER.apply(parser, null);
  }

  public static final ObjectParser<LoggingActionResult, Void> PARSER =
    new ObjectParser<>(LoggingActionResult.class.getName(), false, LoggingActionResult::new);

  static {
    PARSER.declareString(LoggingActionResult::setLoggedText, LOGGED_TEXT);
  }

}
