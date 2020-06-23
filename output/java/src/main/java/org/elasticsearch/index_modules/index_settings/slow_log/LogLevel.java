
package org.elasticsearch.index_modules.index_settings.slow_log;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum LogLevel implements XContentable<LogLevel> {
  Error("error"),
    Warn("warn"),
    Info("info"),
    Debug("debug"),
    Trace("trace");
  private final String textRepresentation;

  private LogLevel(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public LogLevel fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, LogLevel, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "error": return LogLevel.Error;
      case "warn": return LogLevel.Warn;
      case "info": return LogLevel.Info;
      case "debug": return LogLevel.Debug;
      case "trace": return LogLevel.Trace;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, LogLevel.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
