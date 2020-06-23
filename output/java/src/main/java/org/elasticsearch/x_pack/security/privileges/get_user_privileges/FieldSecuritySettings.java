
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


public class FieldSecuritySettings  implements XContentable<FieldSecuritySettings> {
  
  static final ParseField EXCEPT = new ParseField("except");
  private List<String> _except;
  public List<String> getExcept() { return this._except; }
  public FieldSecuritySettings setExcept(List<String> val) { this._except = val; return this; }


  static final ParseField GRANT = new ParseField("grant");
  private List<String> _grant;
  public List<String> getGrant() { return this._grant; }
  public FieldSecuritySettings setGrant(List<String> val) { this._grant = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_except != null) {
      builder.array(EXCEPT.getPreferredName(), _except);
    }
    if (_grant != null) {
      builder.array(GRANT.getPreferredName(), _grant);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public FieldSecuritySettings fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return FieldSecuritySettings.PARSER.apply(parser, null);
  }

  public static final ObjectParser<FieldSecuritySettings, Void> PARSER =
    new ObjectParser<>(FieldSecuritySettings.class.getName(), false, FieldSecuritySettings::new);

  static {
    PARSER.declareStringArray(FieldSecuritySettings::setExcept, EXCEPT);
    PARSER.declareStringArray(FieldSecuritySettings::setGrant, GRANT);
  }

}
