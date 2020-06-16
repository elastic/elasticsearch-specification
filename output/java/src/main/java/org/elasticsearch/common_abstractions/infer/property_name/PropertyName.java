
package org.elasticsearch.common_abstractions.infer.property_name;

import java.io.IOException;
import java.util.Objects;
import org.elasticsearch.XContentable;
import org.elasticsearch.common.xcontent.*;

public final class PropertyName implements XContentable<PropertyName> {
  private final String value;

  public PropertyName(String value) { this.value = value; }

  @Override
  public String toString() { return value.toString(); }

  @Override
  public boolean equals(Object o) {
      if (o == null || getClass() != o.getClass()) return false;
      PropertyName that = (PropertyName) o;
      return Objects.equals(value, that.value);
  }

  @Override
  public int hashCode() { return Objects.hash(value); }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.value(this.value);
    return null;
  }

  public static PropertyName createFrom(XContentParser parser) throws IOException, XContentParseException { return new PropertyName(parser.text()); }

  @Override
  public PropertyName fromXContent(XContentParser parser) throws IOException, XContentParseException { return PropertyName.createFrom(parser); }

}
