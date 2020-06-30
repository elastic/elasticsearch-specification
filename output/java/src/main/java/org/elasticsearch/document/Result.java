
package org.elasticsearch.document;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum Result implements XContentable<Result> {
  Error("Error"),
    Created("created"),
    Updated("updated"),
    Deleted("deleted"),
    NotFound("not_found"),
    Noop("noop");
  private final String textRepresentation;

  private Result(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public Result fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, Result, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "Error": return Result.Error;
      case "created": return Result.Created;
      case "updated": return Result.Updated;
      case "deleted": return Result.Deleted;
      case "not_found": return Result.NotFound;
      case "noop": return Result.Noop;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, Result.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
