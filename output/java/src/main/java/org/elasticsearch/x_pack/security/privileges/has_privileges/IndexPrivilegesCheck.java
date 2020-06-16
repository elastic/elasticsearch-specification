
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


public class IndexPrivilegesCheck  implements XContentable<IndexPrivilegesCheck> {
  
  static final ParseField NAMES = new ParseField("names");
  private List<String> _names;
  public List<String> getNames() { return this._names; }
  public IndexPrivilegesCheck setNames(List<String> val) { this._names = val; return this; }


  static final ParseField PRIVILEGES = new ParseField("privileges");
  private List<String> _privileges;
  public List<String> getPrivileges() { return this._privileges; }
  public IndexPrivilegesCheck setPrivileges(List<String> val) { this._privileges = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_names != null) {
      builder.array(NAMES.getPreferredName(), _names);
    }
    if (_privileges != null) {
      builder.array(PRIVILEGES.getPreferredName(), _privileges);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public IndexPrivilegesCheck fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IndexPrivilegesCheck.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IndexPrivilegesCheck, Void> PARSER =
    new ObjectParser<>(IndexPrivilegesCheck.class.getName(), false, IndexPrivilegesCheck::new);

  static {
    PARSER.declareStringArray(IndexPrivilegesCheck::setNames, NAMES);
    PARSER.declareStringArray(IndexPrivilegesCheck::setPrivileges, PRIVILEGES);
  }

}
