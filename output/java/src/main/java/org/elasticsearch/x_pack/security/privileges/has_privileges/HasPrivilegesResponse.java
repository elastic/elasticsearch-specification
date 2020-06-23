
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
import org.elasticsearch.x_pack.security.privileges.has_privileges.*;

public class HasPrivilegesResponse  implements XContentable<HasPrivilegesResponse> {
  
  static final ParseField APPLICATION = new ParseField("application");
  private NamedContainer<String, List<ResourcePrivileges>> _application;
  public NamedContainer<String, List<ResourcePrivileges>> getApplication() { return this._application; }
  public HasPrivilegesResponse setApplication(NamedContainer<String, List<ResourcePrivileges>> val) { this._application = val; return this; }


  static final ParseField CLUSTER = new ParseField("cluster");
  private NamedContainer<String, Boolean> _cluster;
  public NamedContainer<String, Boolean> getCluster() { return this._cluster; }
  public HasPrivilegesResponse setCluster(NamedContainer<String, Boolean> val) { this._cluster = val; return this; }


  static final ParseField HAS_ALL_REQUESTED = new ParseField("has_all_requested");
  private Boolean _hasAllRequested;
  public Boolean getHasAllRequested() { return this._hasAllRequested; }
  public HasPrivilegesResponse setHasAllRequested(Boolean val) { this._hasAllRequested = val; return this; }


  static final ParseField INDEX = new ParseField("index");
  private List<ResourcePrivileges> _index;
  public List<ResourcePrivileges> getIndex() { return this._index; }
  public HasPrivilegesResponse setIndex(List<ResourcePrivileges> val) { this._index = val; return this; }


  static final ParseField USERNAME = new ParseField("username");
  private String _username;
  public String getUsername() { return this._username; }
  public HasPrivilegesResponse setUsername(String val) { this._username = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_application != null) {
      builder.field(APPLICATION.getPreferredName());
      _application.toXContent(builder, params);
    }
    if (_cluster != null) {
      builder.field(CLUSTER.getPreferredName());
      _cluster.toXContent(builder, params);
    }
    if (_hasAllRequested != null) {
      builder.field(HAS_ALL_REQUESTED.getPreferredName(), _hasAllRequested);
    }
    if (_index != null) {
      builder.array(INDEX.getPreferredName(), _index);
    }
    if (_username != null) {
      builder.field(USERNAME.getPreferredName(), _username);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public HasPrivilegesResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return HasPrivilegesResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<HasPrivilegesResponse, Void> PARSER =
    new ObjectParser<>(HasPrivilegesResponse.class.getName(), false, HasPrivilegesResponse::new);

  static {
    PARSER.declareObject(HasPrivilegesResponse::setApplication, (p, t) -> new NamedContainer<>(n -> () -> n,null /* TODO List<ResourcePrivileges> */), APPLICATION);
    PARSER.declareObject(HasPrivilegesResponse::setCluster, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> pp.booleanValue()), CLUSTER);
    PARSER.declareBoolean(HasPrivilegesResponse::setHasAllRequested, HAS_ALL_REQUESTED);
    PARSER.declareObjectArray(HasPrivilegesResponse::setIndex, (p, t) -> ResourcePrivileges.PARSER.apply(p, t), INDEX);
    PARSER.declareString(HasPrivilegesResponse::setUsername, USERNAME);
  }

}
