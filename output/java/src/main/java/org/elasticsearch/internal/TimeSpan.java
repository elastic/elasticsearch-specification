
package org.elasticsearch.internal;

import java.io.IOException;
import java.util.Objects;
import org.elasticsearch.XContentable;
import org.elasticsearch.common.xcontent.*;

public final class TimeSpan implements XContentable<TimeSpan> {
  private final String value;

  public TimeSpan(String value) { this.value = value; }

  @Override
  public String toString() { return value.toString(); }

  @Override
  public boolean equals(Object o) {
      if (o == null || getClass() != o.getClass()) return false;
      TimeSpan that = (TimeSpan) o;
      return Objects.equals(value, that.value);
  }

  @Override
  public int hashCode() { return Objects.hash(value); }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.value(this.value);
    return null;
  }

  public static TimeSpan createFrom(XContentParser parser) throws IOException, XContentParseException { return new TimeSpan(parser.text()); }

  @Override
  public TimeSpan fromXContent(XContentParser parser) throws IOException, XContentParseException { return TimeSpan.createFrom(parser); }

}
