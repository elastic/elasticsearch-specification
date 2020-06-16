
package org.elasticsearch.modules.indices.fielddata;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum FielddataLoading implements XContentable<FielddataLoading> {
  Eager("eager"),
    EagerGlobalOrdinals("eager_global_ordinals");
  private final String textRepresentation;

  private FielddataLoading(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public FielddataLoading fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, FielddataLoading, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "eager": return FielddataLoading.Eager;
      case "eager_global_ordinals": return FielddataLoading.EagerGlobalOrdinals;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, FielddataLoading.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
