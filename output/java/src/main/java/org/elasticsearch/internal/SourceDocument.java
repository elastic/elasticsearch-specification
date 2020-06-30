
package org.elasticsearch.internal;

import java.io.IOException;
import java.util.Objects;
import org.elasticsearch.XContentable;
import org.elasticsearch.common.xcontent.*;

public final class SourceDocument implements XContentable<SourceDocument> {
  private final Object value;

  public SourceDocument(String value) { this.value = value; }

  @Override
  public String toString() { return value.toString(); }

  @Override
  public boolean equals(Object o) {
      if (o == null || getClass() != o.getClass()) return false;
      SourceDocument that = (SourceDocument) o;
      return Objects.equals(value, that.value);
  }

  @Override
  public int hashCode() { return Objects.hash(value); }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.value(this.value);
    return null;
  }

  public static SourceDocument createFrom(XContentParser parser) throws IOException, XContentParseException { return new SourceDocument(parser.text()); }

  @Override
  public SourceDocument fromXContent(XContentParser parser) throws IOException, XContentParseException { return SourceDocument.createFrom(parser); }

}
