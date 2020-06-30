
package org.elasticsearch.x_pack.security.role.get_role;

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
import org.elasticsearch.x_pack.security.role.put_role.*;

public class XPackRole  implements XContentable<XPackRole> {
  
  static final ParseField CLUSTER = new ParseField("cluster");
  private List<String> _cluster;
  public List<String> getCluster() { return this._cluster; }
  public XPackRole setCluster(List<String> val) { this._cluster = val; return this; }


  static final ParseField INDICES = new ParseField("indices");
  private List<IndicesPrivileges> _indices;
  public List<IndicesPrivileges> getIndices() { return this._indices; }
  public XPackRole setIndices(List<IndicesPrivileges> val) { this._indices = val; return this; }


  static final ParseField METADATA = new ParseField("metadata");
  private NamedContainer<String, Object> _metadata;
  public NamedContainer<String, Object> getMetadata() { return this._metadata; }
  public XPackRole setMetadata(NamedContainer<String, Object> val) { this._metadata = val; return this; }


  static final ParseField RUN_AS = new ParseField("run_as");
  private List<String> _runAs;
  public List<String> getRunAs() { return this._runAs; }
  public XPackRole setRunAs(List<String> val) { this._runAs = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_cluster != null) {
      builder.array(CLUSTER.getPreferredName(), _cluster);
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
  public XPackRole fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return XPackRole.PARSER.apply(parser, null);
  }

  public static final ObjectParser<XPackRole, Void> PARSER =
    new ObjectParser<>(XPackRole.class.getName(), false, XPackRole::new);

  static {
    PARSER.declareStringArray(XPackRole::setCluster, CLUSTER);
    PARSER.declareObjectArray(XPackRole::setIndices, (p, t) -> IndicesPrivileges.PARSER.apply(p, t), INDICES);
    PARSER.declareObject(XPackRole::setMetadata, (p, t) -> new NamedContainer<>(n -> () -> n,XContentParser::binaryValue), METADATA);
    PARSER.declareStringArray(XPackRole::setRunAs, RUN_AS);
  }

}
