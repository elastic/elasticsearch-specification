
package org.elasticsearch.cluster.cluster_allocation_explain;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum AllocationExplainDecision implements XContentable<AllocationExplainDecision> {
  No("NO"),
    Yes("YES"),
    Throttle("THROTTLE"),
    Always("ALWAYS");
  private final String textRepresentation;

  private AllocationExplainDecision(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public AllocationExplainDecision fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, AllocationExplainDecision, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "NO": return AllocationExplainDecision.No;
      case "YES": return AllocationExplainDecision.Yes;
      case "THROTTLE": return AllocationExplainDecision.Throttle;
      case "ALWAYS": return AllocationExplainDecision.Always;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, AllocationExplainDecision.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
