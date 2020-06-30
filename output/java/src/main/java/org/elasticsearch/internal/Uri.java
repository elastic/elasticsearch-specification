
package org.elasticsearch.internal;

import java.io.IOException;
import java.util.Objects;
import org.elasticsearch.XContentable;
import org.elasticsearch.common.xcontent.*;

public final class Uri implements XContentable<Uri> {
  private final String value;

  public Uri(String value) { this.value = value; }

  @Override
  public String toString() { return value.toString(); }

  @Override
  public boolean equals(Object o) {
      if (o == null || getClass() != o.getClass()) return false;
      Uri that = (Uri) o;
      return Objects.equals(value, that.value);
  }

  @Override
  public int hashCode() { return Objects.hash(value); }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.value(this.value);
    return null;
  }

  public static Uri createFrom(XContentParser parser) throws IOException, XContentParseException { return new Uri(parser.text()); }

  @Override
  public Uri fromXContent(XContentParser parser) throws IOException, XContentParseException { return Uri.createFrom(parser); }

}
