
package org.elasticsearch.common_abstractions.infer.metrics;

import java.io.IOException;
import java.util.Objects;
import org.elasticsearch.XContentable;
import org.elasticsearch.common.xcontent.*;

public final class Metrics implements XContentable<Metrics> {
  private final String value;

  public Metrics(String value) { this.value = value; }

  @Override
  public String toString() { return value.toString(); }

  @Override
  public boolean equals(Object o) {
      if (o == null || getClass() != o.getClass()) return false;
      Metrics that = (Metrics) o;
      return Objects.equals(value, that.value);
  }

  @Override
  public int hashCode() { return Objects.hash(value); }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.value(this.value);
    return null;
  }

  public static Metrics createFrom(XContentParser parser) throws IOException, XContentParseException { return new Metrics(parser.text()); }

  @Override
  public Metrics fromXContent(XContentParser parser) throws IOException, XContentParseException { return Metrics.createFrom(parser); }

}
