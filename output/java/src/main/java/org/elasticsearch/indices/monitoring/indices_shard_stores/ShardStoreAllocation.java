
package org.elasticsearch.indices.monitoring.indices_shard_stores;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum ShardStoreAllocation implements XContentable<ShardStoreAllocation> {
  Primary("primary"),
    Replica("replica"),
    Unused("unused");
  private final String textRepresentation;

  private ShardStoreAllocation(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public ShardStoreAllocation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, ShardStoreAllocation, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "primary": return ShardStoreAllocation.Primary;
      case "replica": return ShardStoreAllocation.Replica;
      case "unused": return ShardStoreAllocation.Unused;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, ShardStoreAllocation.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
