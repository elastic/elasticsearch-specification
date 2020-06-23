
package org.elasticsearch.modules.cluster.shard_allocation;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum AllocationEnable implements XContentable<AllocationEnable> {
  All("all"),
    Primaries("primaries"),
    NewPrimaries("new_primaries"),
    None("none");
  private final String textRepresentation;

  private AllocationEnable(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public AllocationEnable fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, AllocationEnable, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "all": return AllocationEnable.All;
      case "primaries": return AllocationEnable.Primaries;
      case "new_primaries": return AllocationEnable.NewPrimaries;
      case "none": return AllocationEnable.None;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, AllocationEnable.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
