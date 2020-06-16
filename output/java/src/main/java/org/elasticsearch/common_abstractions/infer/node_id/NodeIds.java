
package org.elasticsearch.common_abstractions.infer.node_id;

import java.io.IOException;
import java.util.Objects;
import org.elasticsearch.XContentable;
import org.elasticsearch.common.xcontent.*;

public final class NodeIds implements XContentable<NodeIds> {
  private final String value;

  public NodeIds(String value) { this.value = value; }

  @Override
  public String toString() { return value.toString(); }

  @Override
  public boolean equals(Object o) {
      if (o == null || getClass() != o.getClass()) return false;
      NodeIds that = (NodeIds) o;
      return Objects.equals(value, that.value);
  }

  @Override
  public int hashCode() { return Objects.hash(value); }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.value(this.value);
    return null;
  }

  public static NodeIds createFrom(XContentParser parser) throws IOException, XContentParseException { return new NodeIds(parser.text()); }

  @Override
  public NodeIds fromXContent(XContentParser parser) throws IOException, XContentParseException { return NodeIds.createFrom(parser); }

}
