
package org.elasticsearch.cat.cat_transforms;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum TransformType implements XContentable<TransformType> {
  Batch("batch"),
    Continuous("continuous");
  private final String textRepresentation;

  private TransformType(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public TransformType fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, TransformType, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "batch": return TransformType.Batch;
      case "continuous": return TransformType.Continuous;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, TransformType.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
