
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


public class ManageUserPrivileges  implements XContentable<ManageUserPrivileges> {
  
  static final ParseField APPLICATIONS = new ParseField("applications");
  private List<String> _applications;
  public List<String> getApplications() { return this._applications; }
  public ManageUserPrivileges setApplications(List<String> val) { this._applications = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_applications != null) {
      builder.array(APPLICATIONS.getPreferredName(), _applications);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ManageUserPrivileges fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ManageUserPrivileges.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ManageUserPrivileges, Void> PARSER =
    new ObjectParser<>(ManageUserPrivileges.class.getName(), false, ManageUserPrivileges::new);

  static {
    PARSER.declareStringArray(ManageUserPrivileges::setApplications, APPLICATIONS);
  }

}
