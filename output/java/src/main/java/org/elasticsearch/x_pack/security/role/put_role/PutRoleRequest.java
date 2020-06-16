
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
import org.elasticsearch.common.*;
import org.elasticsearch.x_pack.security.role.put_role.*;

public class PutRoleRequest  implements XContentable<PutRoleRequest> {
  
  static final ParseField REFRESH = new ParseField("refresh");
  private Refresh _refresh;
  public Refresh getRefresh() { return this._refresh; }
  public PutRoleRequest setRefresh(Refresh val) { this._refresh = val; return this; }


  static final ParseField APPLICATIONS = new ParseField("applications");
  private List<ApplicationPrivileges> _applications;
  public List<ApplicationPrivileges> getApplications() { return this._applications; }
  public PutRoleRequest setApplications(List<ApplicationPrivileges> val) { this._applications = val; return this; }


  static final ParseField CLUSTER = new ParseField("cluster");
  private List<String> _cluster;
  public List<String> getCluster() { return this._cluster; }
  public PutRoleRequest setCluster(List<String> val) { this._cluster = val; return this; }


  static final ParseField GLOBAL = new ParseField("global");
  private NamedContainer<String, Object> _global;
  public NamedContainer<String, Object> getGlobal() { return this._global; }
  public PutRoleRequest setGlobal(NamedContainer<String, Object> val) { this._global = val; return this; }


  static final ParseField INDICES = new ParseField("indices");
  private List<IndicesPrivileges> _indices;
  public List<IndicesPrivileges> getIndices() { return this._indices; }
  public PutRoleRequest setIndices(List<IndicesPrivileges> val) { this._indices = val; return this; }


  static final ParseField METADATA = new ParseField("metadata");
  private NamedContainer<String, Object> _metadata;
  public NamedContainer<String, Object> getMetadata() { return this._metadata; }
  public PutRoleRequest setMetadata(NamedContainer<String, Object> val) { this._metadata = val; return this; }


  static final ParseField RUN_AS = new ParseField("run_as");
  private List<String> _runAs;
  public List<String> getRunAs() { return this._runAs; }
  public PutRoleRequest setRunAs(List<String> val) { this._runAs = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_refresh != null) {
      builder.field(REFRESH.getPreferredName());
      _refresh.toXContent(builder, params);
    }
    if (_applications != null) {
      builder.array(APPLICATIONS.getPreferredName(), _applications);
    }
    if (_cluster != null) {
      builder.array(CLUSTER.getPreferredName(), _cluster);
    }
    if (_global != null) {
      builder.field(GLOBAL.getPreferredName());
      _global.toXContent(builder, params);
    }
    if (_indices != null) {
      builder.array(INDICES.getPreferredName(), _indices);
    }
    if (_metadata != null) {
      builder.field(METADATA.getPreferredName());
      _metadata.toXContent(builder, params);
    }
    if (_runAs != null) {
      builder.array(RUN_AS.getPreferredName(), _runAs);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public PutRoleRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PutRoleRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PutRoleRequest, Void> PARSER =
    new ObjectParser<>(PutRoleRequest.class.getName(), false, PutRoleRequest::new);

  static {
    PARSER.declareField(PutRoleRequest::setRefresh, (p, t) -> Refresh.PARSER.apply(p), REFRESH, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareObjectArray(PutRoleRequest::setApplications, (p, t) -> ApplicationPrivileges.PARSER.apply(p, t), APPLICATIONS);
    PARSER.declareStringArray(PutRoleRequest::setCluster, CLUSTER);
    PARSER.declareObject(PutRoleRequest::setGlobal, (p, t) -> new NamedContainer<>(n -> () -> n,XContentParser::binaryValue), GLOBAL);
    PARSER.declareObjectArray(PutRoleRequest::setIndices, (p, t) -> IndicesPrivileges.PARSER.apply(p, t), INDICES);
    PARSER.declareObject(PutRoleRequest::setMetadata, (p, t) -> new NamedContainer<>(n -> () -> n,XContentParser::binaryValue), METADATA);
    PARSER.declareStringArray(PutRoleRequest::setRunAs, RUN_AS);
  }

}
