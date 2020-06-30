
package org.elasticsearch.common_abstractions.infer.join_field_routing;

import java.io.IOException;
import java.util.Objects;
import org.elasticsearch.XContentable;
import org.elasticsearch.common.xcontent.*;

public final class Routing implements XContentable<Routing> {
  private final String value;

  public Routing(String value) { this.value = value; }

  @Override
  public String toString() { return value.toString(); }

  @Override
  public boolean equals(Object o) {
      if (o == null || getClass() != o.getClass()) return false;
      Routing that = (Routing) o;
      return Objects.equals(value, that.value);
  }

  @Override
  public int hashCode() { return Objects.hash(value); }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.value(this.value);
    return null;
  }

  public static Routing createFrom(XContentParser parser) throws IOException, XContentParseException { return new Routing(parser.text()); }

  @Override
  public Routing fromXContent(XContentParser parser) throws IOException, XContentParseException { return Routing.createFrom(parser); }

}
