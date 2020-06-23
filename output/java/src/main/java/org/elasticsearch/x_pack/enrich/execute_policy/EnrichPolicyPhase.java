
package org.elasticsearch.x_pack.enrich.execute_policy;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum EnrichPolicyPhase implements XContentable<EnrichPolicyPhase> {
  Scheduled("SCHEDULED"),
    Running("RUNNING"),
    Complete("COMPLETE"),
    Failed("FAILED");
  private final String textRepresentation;

  private EnrichPolicyPhase(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public EnrichPolicyPhase fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, EnrichPolicyPhase, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "SCHEDULED": return EnrichPolicyPhase.Scheduled;
      case "RUNNING": return EnrichPolicyPhase.Running;
      case "COMPLETE": return EnrichPolicyPhase.Complete;
      case "FAILED": return EnrichPolicyPhase.Failed;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, EnrichPolicyPhase.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
