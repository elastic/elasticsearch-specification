
package org.elasticsearch.modules.cluster.shard_allocation;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum AllowRebalance implements XContentable<AllowRebalance> {
  Always("always"),
    IndicesPrimariesActive("indices_primaries_active"),
    IndicesAllActive("indices_all_active");
  private final String textRepresentation;

  private AllowRebalance(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public AllowRebalance fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, AllowRebalance, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "always": return AllowRebalance.Always;
      case "indices_primaries_active": return AllowRebalance.IndicesPrimariesActive;
      case "indices_all_active": return AllowRebalance.IndicesAllActive;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, AllowRebalance.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
