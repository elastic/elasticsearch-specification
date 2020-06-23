
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

public class UserIndicesPrivileges  implements XContentable<UserIndicesPrivileges> {
  
  static final ParseField FIELD_SECURITY = new ParseField("field_security");
  private FieldSecuritySettings _fieldSecurity;
  public FieldSecuritySettings getFieldSecurity() { return this._fieldSecurity; }
  public UserIndicesPrivileges setFieldSecurity(FieldSecuritySettings val) { this._fieldSecurity = val; return this; }


  static final ParseField NAMES = new ParseField("names");
  private List<String> _names;
  public List<String> getNames() { return this._names; }
  public UserIndicesPrivileges setNames(List<String> val) { this._names = val; return this; }


  static final ParseField PRIVILEGES = new ParseField("privileges");
  private List<String> _privileges;
  public List<String> getPrivileges() { return this._privileges; }
  public UserIndicesPrivileges setPrivileges(List<String> val) { this._privileges = val; return this; }


  static final ParseField QUERY = new ParseField("query");
  private QueryUserPrivileges _query;
  public QueryUserPrivileges getQuery() { return this._query; }
  public UserIndicesPrivileges setQuery(QueryUserPrivileges val) { this._query = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_fieldSecurity != null) {
      builder.field(FIELD_SECURITY.getPreferredName());
      _fieldSecurity.toXContent(builder, params);
    }
    if (_names != null) {
      builder.array(NAMES.getPreferredName(), _names);
    }
    if (_privileges != null) {
      builder.array(PRIVILEGES.getPreferredName(), _privileges);
    }
    if (_query != null) {
      builder.field(QUERY.getPreferredName());
      _query.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public UserIndicesPrivileges fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return UserIndicesPrivileges.PARSER.apply(parser, null);
  }

  public static final ObjectParser<UserIndicesPrivileges, Void> PARSER =
    new ObjectParser<>(UserIndicesPrivileges.class.getName(), false, UserIndicesPrivileges::new);

  static {
    PARSER.declareObject(UserIndicesPrivileges::setFieldSecurity, (p, t) -> FieldSecuritySettings.PARSER.apply(p, t), FIELD_SECURITY);
    PARSER.declareStringArray(UserIndicesPrivileges::setNames, NAMES);
    PARSER.declareStringArray(UserIndicesPrivileges::setPrivileges, PRIVILEGES);
    PARSER.declareObject(UserIndicesPrivileges::setQuery, (p, t) -> QueryUserPrivileges.PARSER.apply(p, t), QUERY);
  }

}
