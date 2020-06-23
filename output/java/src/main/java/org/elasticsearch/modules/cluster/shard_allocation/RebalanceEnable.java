
package org.elasticsearch.modules.cluster.shard_allocation;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum RebalanceEnable implements XContentable<RebalanceEnable> {
  All("all"),
    Primaries("primaries"),
    Replicas("replicas"),
    None("none");
  private final String textRepresentation;

  private RebalanceEnable(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public RebalanceEnable fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, RebalanceEnable, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "all": return RebalanceEnable.All;
      case "primaries": return RebalanceEnable.Primaries;
      case "replicas": return RebalanceEnable.Replicas;
      case "none": return RebalanceEnable.None;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, RebalanceEnable.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
