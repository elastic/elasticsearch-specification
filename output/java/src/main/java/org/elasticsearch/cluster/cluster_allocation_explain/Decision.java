
package org.elasticsearch.cluster.cluster_allocation_explain;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum Decision implements XContentable<Decision> {
  Yes("yes"),
    No("no"),
    WorseBalance("worse_balance"),
    Throttled("throttled"),
    AwaitingInfo("awaiting_info"),
    AllocationDelayed("allocation_delayed"),
    NoValidShardCopy("no_valid_shard_copy"),
    NoAttempt("no_attempt");
  private final String textRepresentation;

  private Decision(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public Decision fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, Decision, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "yes": return Decision.Yes;
      case "no": return Decision.No;
      case "worse_balance": return Decision.WorseBalance;
      case "throttled": return Decision.Throttled;
      case "awaiting_info": return Decision.AwaitingInfo;
      case "allocation_delayed": return Decision.AllocationDelayed;
      case "no_valid_shard_copy": return Decision.NoValidShardCopy;
      case "no_attempt": return Decision.NoAttempt;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, Decision.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
