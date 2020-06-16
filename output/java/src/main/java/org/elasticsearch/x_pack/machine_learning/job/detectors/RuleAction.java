
package org.elasticsearch.x_pack.machine_learning.job.detectors;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum RuleAction implements XContentable<RuleAction> {
  SkipResult("skip_result"),
    SkipModelUpdate("skip_model_update");
  private final String textRepresentation;

  private RuleAction(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public RuleAction fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, RuleAction, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "skip_result": return RuleAction.SkipResult;
      case "skip_model_update": return RuleAction.SkipModelUpdate;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, RuleAction.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
