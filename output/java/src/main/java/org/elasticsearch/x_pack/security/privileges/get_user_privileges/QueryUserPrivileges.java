
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

public class QueryUserPrivileges  implements XContentable<QueryUserPrivileges> {
  
  static final ParseField TERM = new ParseField("term");
  private TermUserPrivileges _term;
  public TermUserPrivileges getTerm() { return this._term; }
  public QueryUserPrivileges setTerm(TermUserPrivileges val) { this._term = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_term != null) {
      builder.field(TERM.getPreferredName());
      _term.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public QueryUserPrivileges fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return QueryUserPrivileges.PARSER.apply(parser, null);
  }

  public static final ObjectParser<QueryUserPrivileges, Void> PARSER =
    new ObjectParser<>(QueryUserPrivileges.class.getName(), false, QueryUserPrivileges::new);

  static {
    PARSER.declareObject(QueryUserPrivileges::setTerm, (p, t) -> TermUserPrivileges.PARSER.apply(p, t), TERM);
  }

}
