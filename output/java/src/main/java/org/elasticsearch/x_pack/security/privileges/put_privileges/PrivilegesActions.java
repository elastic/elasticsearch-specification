
package org.elasticsearch.x_pack.security.privileges.put_privileges;

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


public class PrivilegesActions  implements XContentable<PrivilegesActions> {
  
  static final ParseField ACTIONS = new ParseField("actions");
  private List<String> _actions;
  public List<String> getActions() { return this._actions; }
  public PrivilegesActions setActions(List<String> val) { this._actions = val; return this; }


  static final ParseField METADATA = new ParseField("metadata");
  private NamedContainer<String, Object> _metadata;
  public NamedContainer<String, Object> getMetadata() { return this._metadata; }
  public PrivilegesActions setMetadata(NamedContainer<String, Object> val) { this._metadata = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_actions != null) {
      builder.array(ACTIONS.getPreferredName(), _actions);
    }
    if (_metadata != null) {
      builder.field(METADATA.getPreferredName());
      _metadata.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public PrivilegesActions fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PrivilegesActions.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PrivilegesActions, Void> PARSER =
    new ObjectParser<>(PrivilegesActions.class.getName(), false, PrivilegesActions::new);

  static {
    PARSER.declareStringArray(PrivilegesActions::setActions, ACTIONS);
    PARSER.declareObject(PrivilegesActions::setMetadata, (p, t) -> new NamedContainer<>(n -> () -> n,XContentParser::binaryValue), METADATA);
  }

}
