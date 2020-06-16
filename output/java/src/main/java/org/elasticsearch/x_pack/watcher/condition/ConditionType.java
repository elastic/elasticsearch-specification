
package org.elasticsearch.x_pack.watcher.condition;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum ConditionType implements XContentable<ConditionType> {
  Always("always"),
    Never("never"),
    Script("script"),
    Compare("compare"),
    ArrayCompare("array_compare");
  private final String textRepresentation;

  private ConditionType(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public ConditionType fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, ConditionType, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "always": return ConditionType.Always;
      case "never": return ConditionType.Never;
      case "script": return ConditionType.Script;
      case "compare": return ConditionType.Compare;
      case "array_compare": return ConditionType.ArrayCompare;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, ConditionType.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
