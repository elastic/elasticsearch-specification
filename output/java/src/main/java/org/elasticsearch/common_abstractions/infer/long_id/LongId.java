
package org.elasticsearch.common_abstractions.infer.long_id;

import java.io.IOException;
import java.util.Objects;
import org.elasticsearch.XContentable;
import org.elasticsearch.common.xcontent.*;

public final class LongId implements XContentable<LongId> {
  private final String value;

  public LongId(String value) { this.value = value; }

  @Override
  public String toString() { return value.toString(); }

  @Override
  public boolean equals(Object o) {
      if (o == null || getClass() != o.getClass()) return false;
      LongId that = (LongId) o;
      return Objects.equals(value, that.value);
  }

  @Override
  public int hashCode() { return Objects.hash(value); }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.value(this.value);
    return null;
  }

  public static LongId createFrom(XContentParser parser) throws IOException, XContentParseException { return new LongId(parser.text()); }

  @Override
  public LongId fromXContent(XContentParser parser) throws IOException, XContentParseException { return LongId.createFrom(parser); }

}
