
package org.elasticsearch.x_pack.machine_learning.job.detectors;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum RuleFilterType implements XContentable<RuleFilterType> {
  Include("include"),
    Exclude("exclude");
  private final String textRepresentation;

  private RuleFilterType(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public RuleFilterType fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, RuleFilterType, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "include": return RuleFilterType.Include;
      case "exclude": return RuleFilterType.Exclude;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, RuleFilterType.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
