
package org.elasticsearch.x_pack.security.role;

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
import org.elasticsearch.common_abstractions.infer.field.*;

public class FieldSecurity  implements XContentable<FieldSecurity> {
  
  static final ParseField EXCEPT = new ParseField("except");
  private List<Field> _except;
  public List<Field> getExcept() { return this._except; }
  public FieldSecurity setExcept(List<Field> val) { this._except = val; return this; }


  static final ParseField GRANT = new ParseField("grant");
  private List<Field> _grant;
  public List<Field> getGrant() { return this._grant; }
  public FieldSecurity setGrant(List<Field> val) { this._grant = val; return this; }


  
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
  public FieldSecurity fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return FieldSecurity.PARSER.apply(parser, null);
  }

  public static final ObjectParser<FieldSecurity, Void> PARSER =
    new ObjectParser<>(FieldSecurity.class.getName(), false, FieldSecurity::new);

  static {
    PARSER.declareObjectArray(FieldSecurity::setExcept, (p, t) -> Field.createFrom(p), EXCEPT);
    PARSER.declareObjectArray(FieldSecurity::setGrant, (p, t) -> Field.createFrom(p), GRANT);
  }

}
