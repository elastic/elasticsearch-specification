
package org.elasticsearch.x_pack.cross_cluster_replication.follow.follow_info;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum FollowerIndexStatus implements XContentable<FollowerIndexStatus> {
  Active("active"),
    Paused("paused");
  private final String textRepresentation;

  private FollowerIndexStatus(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public FollowerIndexStatus fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, FollowerIndexStatus, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "active": return FollowerIndexStatus.Active;
      case "paused": return FollowerIndexStatus.Paused;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, FollowerIndexStatus.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
