
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
import org.elasticsearch.x_pack.security.role.*;
import org.elasticsearch.common_abstractions.infer.indices.*;
import org.elasticsearch.query_dsl.abstractions.container.*;

public class IndicesPrivileges  implements XContentable<IndicesPrivileges> {
  
  static final ParseField FIELD_SECURITY = new ParseField("field_security");
  private FieldSecurity _fieldSecurity;
  public FieldSecurity getFieldSecurity() { return this._fieldSecurity; }
  public IndicesPrivileges setFieldSecurity(FieldSecurity val) { this._fieldSecurity = val; return this; }


  static final ParseField NAMES = new ParseField("names");
  private Indices _names;
  public Indices getNames() { return this._names; }
  public IndicesPrivileges setNames(Indices val) { this._names = val; return this; }


  static final ParseField PRIVILEGES = new ParseField("privileges");
  private List<String> _privileges;
  public List<String> getPrivileges() { return this._privileges; }
  public IndicesPrivileges setPrivileges(List<String> val) { this._privileges = val; return this; }


  static final ParseField QUERY = new ParseField("query");
  private QueryContainer _query;
  public QueryContainer getQuery() { return this._query; }
  public IndicesPrivileges setQuery(QueryContainer val) { this._query = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_fieldSecurity != null) {
      builder.field(FIELD_SECURITY.getPreferredName());
      _fieldSecurity.toXContent(builder, params);
    }
    if (_names != null) {
      builder.field(NAMES.getPreferredName());
      _names.toXContent(builder, params);
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
  public IndicesPrivileges fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IndicesPrivileges.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IndicesPrivileges, Void> PARSER =
    new ObjectParser<>(IndicesPrivileges.class.getName(), false, IndicesPrivileges::new);

  static {
    PARSER.declareObject(IndicesPrivileges::setFieldSecurity, (p, t) -> FieldSecurity.PARSER.apply(p, t), FIELD_SECURITY);
    PARSER.declareObject(IndicesPrivileges::setNames, (p, t) -> Indices.createFrom(p), NAMES);
    PARSER.declareStringArray(IndicesPrivileges::setPrivileges, PRIVILEGES);
    PARSER.declareObject(IndicesPrivileges::setQuery, (p, t) -> QueryContainer.PARSER.apply(p, t), QUERY);
  }

}
