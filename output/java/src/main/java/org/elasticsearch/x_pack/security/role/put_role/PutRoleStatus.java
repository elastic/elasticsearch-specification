
package org.elasticsearch.x_pack.security.role.put_role;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.Either;
import org.elasticsearch.XContentable;
import org.elasticsearch.NamedContainer;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;


public class PutRoleStatus  implements XContentable<PutRoleStatus> {
  
  static final ParseField CREATED = new ParseField("created");
  private Boolean _created;
  public Boolean getCreated() { return this._created; }
  public PutRoleStatus setCreated(Boolean val) { this._created = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_created != null) {
      builder.field(CREATED.getPreferredName(), _created);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public PutRoleStatus fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PutRoleStatus.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PutRoleStatus, Void> PARSER =
    new ObjectParser<>(PutRoleStatus.class.getName(), false, PutRoleStatus::new);

  static {
    PARSER.declareBoolean(PutRoleStatus::setCreated, CREATED);
  }

}
