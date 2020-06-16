
package org.elasticsearch.common_abstractions.infer.timestamp;

import java.io.IOException;
import java.util.Objects;
import org.elasticsearch.XContentable;
import org.elasticsearch.common.xcontent.*;

public final class Timestamp implements XContentable<Timestamp> {
  private final String value;

  public Timestamp(String value) { this.value = value; }

  @Override
  public String toString() { return value.toString(); }

  @Override
  public boolean equals(Object o) {
      if (o == null || getClass() != o.getClass()) return false;
      Timestamp that = (Timestamp) o;
      return Objects.equals(value, that.value);
  }

  @Override
  public int hashCode() { return Objects.hash(value); }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.value(this.value);
    return null;
  }

  public static Timestamp createFrom(XContentParser parser) throws IOException, XContentParseException { return new Timestamp(parser.text()); }

  @Override
  public Timestamp fromXContent(XContentParser parser) throws IOException, XContentParseException { return Timestamp.createFrom(parser); }

}
