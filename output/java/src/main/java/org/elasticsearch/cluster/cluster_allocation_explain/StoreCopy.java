
package org.elasticsearch.cluster.cluster_allocation_explain;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum StoreCopy implements XContentable<StoreCopy> {
  None("NONE"),
    Available("AVAILABLE"),
    Corrupt("CORRUPT"),
    IoError("IO_ERROR"),
    Stale("STALE"),
    Unknown("UNKNOWN");
  private final String textRepresentation;

  private StoreCopy(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public StoreCopy fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, StoreCopy, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "NONE": return StoreCopy.None;
      case "AVAILABLE": return StoreCopy.Available;
      case "CORRUPT": return StoreCopy.Corrupt;
      case "IO_ERROR": return StoreCopy.IoError;
      case "STALE": return StoreCopy.Stale;
      case "UNKNOWN": return StoreCopy.Unknown;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, StoreCopy.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
