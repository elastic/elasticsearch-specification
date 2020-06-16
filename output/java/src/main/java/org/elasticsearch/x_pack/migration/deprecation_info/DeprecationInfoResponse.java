
package org.elasticsearch.x_pack.migration.deprecation_info;

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
import org.elasticsearch.x_pack.migration.deprecation_info.*;

public class DeprecationInfoResponse  implements XContentable<DeprecationInfoResponse> {
  
  static final ParseField CLUSTER_SETTINGS = new ParseField("cluster_settings");
  private List<DeprecationInfo> _clusterSettings;
  public List<DeprecationInfo> getClusterSettings() { return this._clusterSettings; }
  public DeprecationInfoResponse setClusterSettings(List<DeprecationInfo> val) { this._clusterSettings = val; return this; }


  static final ParseField INDEX_SETTINGS = new ParseField("index_settings");
  private NamedContainer<String, List<DeprecationInfo>> _indexSettings;
  public NamedContainer<String, List<DeprecationInfo>> getIndexSettings() { return this._indexSettings; }
  public DeprecationInfoResponse setIndexSettings(NamedContainer<String, List<DeprecationInfo>> val) { this._indexSettings = val; return this; }


  static final ParseField NODE_SETTINGS = new ParseField("node_settings");
  private List<DeprecationInfo> _nodeSettings;
  public List<DeprecationInfo> getNodeSettings() { return this._nodeSettings; }
  public DeprecationInfoResponse setNodeSettings(List<DeprecationInfo> val) { this._nodeSettings = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_clusterSettings != null) {
      builder.array(CLUSTER_SETTINGS.getPreferredName(), _clusterSettings);
    }
    if (_indexSettings != null) {
      builder.field(INDEX_SETTINGS.getPreferredName());
      _indexSettings.toXContent(builder, params);
    }
    if (_nodeSettings != null) {
      builder.array(NODE_SETTINGS.getPreferredName(), _nodeSettings);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public DeprecationInfoResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeprecationInfoResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeprecationInfoResponse, Void> PARSER =
    new ObjectParser<>(DeprecationInfoResponse.class.getName(), false, DeprecationInfoResponse::new);

  static {
    PARSER.declareObjectArray(DeprecationInfoResponse::setClusterSettings, (p, t) -> DeprecationInfo.PARSER.apply(p, t), CLUSTER_SETTINGS);
    PARSER.declareObject(DeprecationInfoResponse::setIndexSettings, (p, t) -> new NamedContainer<>(n -> () -> n,null /* TODO List<DeprecationInfo> */), INDEX_SETTINGS);
    PARSER.declareObjectArray(DeprecationInfoResponse::setNodeSettings, (p, t) -> DeprecationInfo.PARSER.apply(p, t), NODE_SETTINGS);
  }

}
