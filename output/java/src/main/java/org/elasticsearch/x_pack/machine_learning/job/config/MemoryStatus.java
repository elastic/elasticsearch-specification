
package org.elasticsearch.x_pack.machine_learning.job.config;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum MemoryStatus implements XContentable<MemoryStatus> {
  Ok("ok"),
    SoftLimit("soft_limit"),
    HardLimit("hard_limit");
  private final String textRepresentation;

  private MemoryStatus(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public MemoryStatus fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, MemoryStatus, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "ok": return MemoryStatus.Ok;
      case "soft_limit": return MemoryStatus.SoftLimit;
      case "hard_limit": return MemoryStatus.HardLimit;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, MemoryStatus.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
