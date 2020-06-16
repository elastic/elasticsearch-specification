
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
import org.elasticsearch.x_pack.security.privileges.get_user_privileges.*;

public class GlobalPrivileges  implements XContentable<GlobalPrivileges> {
  
  static final ParseField APPLICATION = new ParseField("application");
  private ApplicationGlobalUserPrivileges _application;
  public ApplicationGlobalUserPrivileges getApplication() { return this._application; }
  public GlobalPrivileges setApplication(ApplicationGlobalUserPrivileges val) { this._application = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_application != null) {
      builder.field(APPLICATION.getPreferredName());
      _application.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public GlobalPrivileges fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GlobalPrivileges.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GlobalPrivileges, Void> PARSER =
    new ObjectParser<>(GlobalPrivileges.class.getName(), false, GlobalPrivileges::new);

  static {
    PARSER.declareObject(GlobalPrivileges::setApplication, (p, t) -> ApplicationGlobalUserPrivileges.PARSER.apply(p, t), APPLICATION);
  }

}
