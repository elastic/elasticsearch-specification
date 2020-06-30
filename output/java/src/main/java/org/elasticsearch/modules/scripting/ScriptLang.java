
package org.elasticsearch.modules.scripting;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum ScriptLang implements XContentable<ScriptLang> {
  Painless("painless"),
    Expression("expression"),
    Mustache("mustache");
  private final String textRepresentation;

  private ScriptLang(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public ScriptLang fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, ScriptLang, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "painless": return ScriptLang.Painless;
      case "expression": return ScriptLang.Expression;
      case "mustache": return ScriptLang.Mustache;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, ScriptLang.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
