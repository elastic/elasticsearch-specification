
package org.elasticsearch.common_abstractions.infer.name;

import java.io.IOException;
import java.util.Objects;
import org.elasticsearch.XContentable;
import org.elasticsearch.common.xcontent.*;

public final class Names implements XContentable<Names> {
  private final String value;

  public Names(String value) { this.value = value; }

  @Override
  public String toString() { return value.toString(); }

  @Override
  public boolean equals(Object o) {
      if (o == null || getClass() != o.getClass()) return false;
      Names that = (Names) o;
      return Objects.equals(value, that.value);
  }

  @Override
  public int hashCode() { return Objects.hash(value); }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.value(this.value);
    return null;
  }

  public static Names createFrom(XContentParser parser) throws IOException, XContentParseException { return new Names(parser.text()); }

  @Override
  public Names fromXContent(XContentParser parser) throws IOException, XContentParseException { return Names.createFrom(parser); }

}
