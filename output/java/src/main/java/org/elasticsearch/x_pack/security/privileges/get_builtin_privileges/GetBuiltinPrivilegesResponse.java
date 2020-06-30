
package org.elasticsearch.x_pack.security.privileges.get_builtin_privileges;

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


public class GetBuiltinPrivilegesResponse  implements XContentable<GetBuiltinPrivilegesResponse> {
  
  static final ParseField CLUSTER = new ParseField("cluster");
  private List<String> _cluster;
  public List<String> getCluster() { return this._cluster; }
  public GetBuiltinPrivilegesResponse setCluster(List<String> val) { this._cluster = val; return this; }


  static final ParseField INDEX = new ParseField("index");
  private List<String> _index;
  public List<String> getIndex() { return this._index; }
  public GetBuiltinPrivilegesResponse setIndex(List<String> val) { this._index = val; return this; }


  
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
  public GetBuiltinPrivilegesResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetBuiltinPrivilegesResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetBuiltinPrivilegesResponse, Void> PARSER =
    new ObjectParser<>(GetBuiltinPrivilegesResponse.class.getName(), false, GetBuiltinPrivilegesResponse::new);

  static {
    PARSER.declareStringArray(GetBuiltinPrivilegesResponse::setCluster, CLUSTER);
    PARSER.declareStringArray(GetBuiltinPrivilegesResponse::setIndex, INDEX);
  }

}
