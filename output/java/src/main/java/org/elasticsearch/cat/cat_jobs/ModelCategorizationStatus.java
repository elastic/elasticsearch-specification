
package org.elasticsearch.cat.cat_jobs;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum ModelCategorizationStatus implements XContentable<ModelCategorizationStatus> {
  Ok("ok"),
    Warn("warn");
  private final String textRepresentation;

  private ModelCategorizationStatus(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public ModelCategorizationStatus fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, ModelCategorizationStatus, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "ok": return ModelCategorizationStatus.Ok;
      case "warn": return ModelCategorizationStatus.Warn;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, ModelCategorizationStatus.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
