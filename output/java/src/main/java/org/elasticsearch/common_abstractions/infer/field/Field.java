
package org.elasticsearch.common_abstractions.infer.field;

import java.io.IOException;
import java.util.Objects;
import org.elasticsearch.XContentable;
import org.elasticsearch.common.xcontent.*;

public final class Field implements XContentable<Field> {
  private final String value;

  public Field(String value) { this.value = value; }

  @Override
  public String toString() { return value.toString(); }

  @Override
  public boolean equals(Object o) {
      if (o == null || getClass() != o.getClass()) return false;
      Field that = (Field) o;
      return Objects.equals(value, that.value);
  }

  @Override
  public int hashCode() { return Objects.hash(value); }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.value(this.value);
    return null;
  }

  public static Field createFrom(XContentParser parser) throws IOException, XContentParseException { return new Field(parser.text()); }

  @Override
  public Field fromXContent(XContentParser parser) throws IOException, XContentParseException { return Field.createFrom(parser); }

}
