
package org.elasticsearch.cluster.root_node_info;

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
import org.elasticsearch.common_abstractions.response.*;

public class RootNodeInfoResponse  implements XContentable<RootNodeInfoResponse> {
  
  static final ParseField NAME = new ParseField("name");
  private String _name;
  public String getName() { return this._name; }
  public RootNodeInfoResponse setName(String val) { this._name = val; return this; }


  static final ParseField CLUSTER_NAME = new ParseField("cluster_name");
  private String _clusterName;
  public String getClusterName() { return this._clusterName; }
  public RootNodeInfoResponse setClusterName(String val) { this._clusterName = val; return this; }


  static final ParseField CLUSTER_UUID = new ParseField("cluster_uuid");
  private String _clusterUuid;
  public String getClusterUuid() { return this._clusterUuid; }
  public RootNodeInfoResponse setClusterUuid(String val) { this._clusterUuid = val; return this; }


  static final ParseField VERSION = new ParseField("version");
  private ElasticsearchVersionInfo _version;
  public ElasticsearchVersionInfo getVersion() { return this._version; }
  public RootNodeInfoResponse setVersion(ElasticsearchVersionInfo val) { this._version = val; return this; }


  static final ParseField TAGLINE = new ParseField("tagline");
  private String _tagline;
  public String getTagline() { return this._tagline; }
  public RootNodeInfoResponse setTagline(String val) { this._tagline = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_name != null) {
      builder.field(NAME.getPreferredName(), _name);
    }
    if (_clusterName != null) {
      builder.field(CLUSTER_NAME.getPreferredName(), _clusterName);
    }
    if (_clusterUuid != null) {
      builder.field(CLUSTER_UUID.getPreferredName(), _clusterUuid);
    }
    if (_version != null) {
      builder.field(VERSION.getPreferredName());
      _version.toXContent(builder, params);
    }
    if (_tagline != null) {
      builder.field(TAGLINE.getPreferredName(), _tagline);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public RootNodeInfoResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RootNodeInfoResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RootNodeInfoResponse, Void> PARSER =
    new ObjectParser<>(RootNodeInfoResponse.class.getName(), false, RootNodeInfoResponse::new);

  static {
    PARSER.declareString(RootNodeInfoResponse::setName, NAME);
    PARSER.declareString(RootNodeInfoResponse::setClusterName, CLUSTER_NAME);
    PARSER.declareString(RootNodeInfoResponse::setClusterUuid, CLUSTER_UUID);
    PARSER.declareObject(RootNodeInfoResponse::setVersion, (p, t) -> ElasticsearchVersionInfo.PARSER.apply(p, t), VERSION);
    PARSER.declareString(RootNodeInfoResponse::setTagline, TAGLINE);
  }

}
