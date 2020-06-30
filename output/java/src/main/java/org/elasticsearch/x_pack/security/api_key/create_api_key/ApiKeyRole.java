
package org.elasticsearch.x_pack.security.api_key.create_api_key;

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
import org.elasticsearch.x_pack.security.api_key.create_api_key.*;

public class ApiKeyRole  implements XContentable<ApiKeyRole> {
  
  static final ParseField CLUSTER = new ParseField("cluster");
  private List<String> _cluster;
  public List<String> getCluster() { return this._cluster; }
  public ApiKeyRole setCluster(List<String> val) { this._cluster = val; return this; }


  static final ParseField INDEX = new ParseField("index");
  private List<ApiKeyPrivileges> _index;
  public List<ApiKeyPrivileges> getIndex() { return this._index; }
  public ApiKeyRole setIndex(List<ApiKeyPrivileges> val) { this._index = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_cluster != null) {
      builder.array(CLUSTER.getPreferredName(), _cluster);
    }
    if (_index != null) {
      builder.array(INDEX.getPreferredName(), _index);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ApiKeyRole fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ApiKeyRole.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ApiKeyRole, Void> PARSER =
    new ObjectParser<>(ApiKeyRole.class.getName(), false, ApiKeyRole::new);

  static {
    PARSER.declareStringArray(ApiKeyRole::setCluster, CLUSTER);
    PARSER.declareObjectArray(ApiKeyRole::setIndex, (p, t) -> ApiKeyPrivileges.PARSER.apply(p, t), INDEX);
  }

}
