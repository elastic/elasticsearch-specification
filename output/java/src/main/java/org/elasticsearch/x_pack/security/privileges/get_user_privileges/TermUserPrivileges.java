
package org.elasticsearch.x_pack.security.privileges.get_user_privileges;

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


public class TermUserPrivileges  implements XContentable<TermUserPrivileges> {
  
  static final ParseField APPS = new ParseField("apps");
  private Boolean _apps;
  public Boolean getApps() { return this._apps; }
  public TermUserPrivileges setApps(Boolean val) { this._apps = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_apps != null) {
      builder.field(APPS.getPreferredName(), _apps);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public TermUserPrivileges fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TermUserPrivileges.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TermUserPrivileges, Void> PARSER =
    new ObjectParser<>(TermUserPrivileges.class.getName(), false, TermUserPrivileges::new);

  static {
    PARSER.declareBoolean(TermUserPrivileges::setApps, APPS);
  }

}
