
package org.elasticsearch.common_abstractions.infer.name;

import java.io.IOException;
import java.util.Objects;
import org.elasticsearch.XContentable;
import org.elasticsearch.common.xcontent.*;

public final class Name implements XContentable<Name> {
  private final String value;

  public Name(String value) { this.value = value; }

  @Override
  public String toString() { return value.toString(); }

  @Override
  public boolean equals(Object o) {
      if (o == null || getClass() != o.getClass()) return false;
      Name that = (Name) o;
      return Objects.equals(value, that.value);
  }

  @Override
  public int hashCode() { return Objects.hash(value); }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.value(this.value);
    return null;
  }

  public static Name createFrom(XContentParser parser) throws IOException, XContentParseException { return new Name(parser.text()); }

  @Override
  public Name fromXContent(XContentParser parser) throws IOException, XContentParseException { return Name.createFrom(parser); }

}
