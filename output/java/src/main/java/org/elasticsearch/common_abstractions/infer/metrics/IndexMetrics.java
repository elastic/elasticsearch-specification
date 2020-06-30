
package org.elasticsearch.common_abstractions.infer.metrics;

import java.io.IOException;
import java.util.Objects;
import org.elasticsearch.XContentable;
import org.elasticsearch.common.xcontent.*;

public final class IndexMetrics implements XContentable<IndexMetrics> {
  private final String value;

  public IndexMetrics(String value) { this.value = value; }

  @Override
  public String toString() { return value.toString(); }

  @Override
  public boolean equals(Object o) {
      if (o == null || getClass() != o.getClass()) return false;
      IndexMetrics that = (IndexMetrics) o;
      return Objects.equals(value, that.value);
  }

  @Override
  public int hashCode() { return Objects.hash(value); }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.value(this.value);
    return null;
  }

  public static IndexMetrics createFrom(XContentParser parser) throws IOException, XContentParseException { return new IndexMetrics(parser.text()); }

  @Override
  public IndexMetrics fromXContent(XContentParser parser) throws IOException, XContentParseException { return IndexMetrics.createFrom(parser); }

}
