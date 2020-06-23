
package org.elasticsearch.x_pack.security.role_mapping.get_role_mapping;

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
import org.elasticsearch.x_pack.security.role_mapping.rules.role.*;

public class XPackRoleMapping  implements XContentable<XPackRoleMapping> {
  
  static final ParseField ENABLED = new ParseField("enabled");
  private Boolean _enabled;
  public Boolean getEnabled() { return this._enabled; }
  public XPackRoleMapping setEnabled(Boolean val) { this._enabled = val; return this; }


  static final ParseField METADATA = new ParseField("metadata");
  private NamedContainer<String, Object> _metadata;
  public NamedContainer<String, Object> getMetadata() { return this._metadata; }
  public XPackRoleMapping setMetadata(NamedContainer<String, Object> val) { this._metadata = val; return this; }


  static final ParseField ROLES = new ParseField("roles");
  private List<String> _roles;
  public List<String> getRoles() { return this._roles; }
  public XPackRoleMapping setRoles(List<String> val) { this._roles = val; return this; }


  static final ParseField RULES = new ParseField("rules");
  private RoleMappingRuleBase _rules;
  public RoleMappingRuleBase getRules() { return this._rules; }
  public XPackRoleMapping setRules(RoleMappingRuleBase val) { this._rules = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_enabled != null) {
      builder.field(ENABLED.getPreferredName(), _enabled);
    }
    if (_metadata != null) {
      builder.field(METADATA.getPreferredName());
      _metadata.toXContent(builder, params);
    }
    if (_roles != null) {
      builder.array(ROLES.getPreferredName(), _roles);
    }
    if (_rules != null) {
      builder.field(RULES.getPreferredName());
      _rules.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public XPackRoleMapping fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return XPackRoleMapping.PARSER.apply(parser, null);
  }

  public static final ObjectParser<XPackRoleMapping, Void> PARSER =
    new ObjectParser<>(XPackRoleMapping.class.getName(), false, XPackRoleMapping::new);

  static {
    PARSER.declareBoolean(XPackRoleMapping::setEnabled, ENABLED);
    PARSER.declareObject(XPackRoleMapping::setMetadata, (p, t) -> new NamedContainer<>(n -> () -> n,XContentParser::binaryValue), METADATA);
    PARSER.declareStringArray(XPackRoleMapping::setRoles, ROLES);
    PARSER.declareObject(XPackRoleMapping::setRules, (p, t) -> RoleMappingRuleBase.PARSER.apply(p, t), RULES);
  }

}
