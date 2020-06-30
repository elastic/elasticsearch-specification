
package org.elasticsearch.x_pack.security.privileges.has_privileges;

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


public class ApplicationPrivilegesCheck  implements XContentable<ApplicationPrivilegesCheck> {
  
  static final ParseField APPLICATION = new ParseField("application");
  private String _application;
  public String getApplication() { return this._application; }
  public ApplicationPrivilegesCheck setApplication(String val) { this._application = val; return this; }


  static final ParseField PRIVILEGES = new ParseField("privileges");
  private List<String> _privileges;
  public List<String> getPrivileges() { return this._privileges; }
  public ApplicationPrivilegesCheck setPrivileges(List<String> val) { this._privileges = val; return this; }


  static final ParseField RESOURCES = new ParseField("resources");
  private List<String> _resources;
  public List<String> getResources() { return this._resources; }
  public ApplicationPrivilegesCheck setResources(List<String> val) { this._resources = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_application != null) {
      builder.field(APPLICATION.getPreferredName(), _application);
    }
    if (_privileges != null) {
      builder.array(PRIVILEGES.getPreferredName(), _privileges);
    }
    if (_resources != null) {
      builder.array(RESOURCES.getPreferredName(), _resources);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ApplicationPrivilegesCheck fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ApplicationPrivilegesCheck.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ApplicationPrivilegesCheck, Void> PARSER =
    new ObjectParser<>(ApplicationPrivilegesCheck.class.getName(), false, ApplicationPrivilegesCheck::new);

  static {
    PARSER.declareString(ApplicationPrivilegesCheck::setApplication, APPLICATION);
    PARSER.declareStringArray(ApplicationPrivilegesCheck::setPrivileges, PRIVILEGES);
    PARSER.declareStringArray(ApplicationPrivilegesCheck::setResources, RESOURCES);
  }

}
