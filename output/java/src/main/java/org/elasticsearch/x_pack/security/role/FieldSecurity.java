
package org.elasticsearch.x_pack.security.role;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.internal.*;

public class FieldSecurity  implements XContentable<FieldSecurity> {
  
  static final ParseField EXCEPT = new ParseField("except");
  private List<String> _except;
  public List<String> getExcept() { return this._except; }
  public FieldSecurity setExcept(List<String> val) { this._except = val; return this; }

  static final ParseField GRANT = new ParseField("grant");
  private List<String> _grant;
  public List<String> getGrant() { return this._grant; }
  public FieldSecurity setGrant(List<String> val) { this._grant = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_except != null) {
      builder.array(EXCEPT.getPreferredName(), _except);
    }
    if (_grant != null) {
      builder.array(GRANT.getPreferredName(), _grant);
    }
  }

  @Override
  public FieldSecurity fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return FieldSecurity.PARSER.apply(parser, null);
  }

  public static final ObjectParser<FieldSecurity, Void> PARSER =
    new ObjectParser<>(FieldSecurity.class.getName(), false, FieldSecurity::new);

  static {
    PARSER.declareStringArray(FieldSecurity::setExcept, EXCEPT);
    PARSER.declareStringArray(FieldSecurity::setGrant, GRANT);
  }

}
