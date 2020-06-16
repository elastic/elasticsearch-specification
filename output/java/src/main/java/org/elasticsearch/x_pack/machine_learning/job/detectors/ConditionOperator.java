
package org.elasticsearch.x_pack.machine_learning.job.detectors;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum ConditionOperator implements XContentable<ConditionOperator> {
  Gt("gt"),
    Gte("gte"),
    Lt("lt"),
    Lte("lte");
  private final String textRepresentation;

  private ConditionOperator(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public ConditionOperator fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, ConditionOperator, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "gt": return ConditionOperator.Gt;
      case "gte": return ConditionOperator.Gte;
      case "lt": return ConditionOperator.Lt;
      case "lte": return ConditionOperator.Lte;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, ConditionOperator.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
