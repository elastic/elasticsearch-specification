
package org.elasticsearch.cat.cat_jobs;

//
// Generated code - Do not edit (enum)
//

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum ModelMemoryStatus implements XContentable<ModelMemoryStatus> {
  Ok("ok"),
    SoftLimit("soft_limit"),
    HardLimit("hard_limit");
  private final String textRepresentation;

  private ModelMemoryStatus(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public ModelMemoryStatus fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, ModelMemoryStatus, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "ok": return ModelMemoryStatus.Ok;
      case "soft_limit": return ModelMemoryStatus.SoftLimit;
      case "hard_limit": return ModelMemoryStatus.HardLimit;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, ModelMemoryStatus.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
