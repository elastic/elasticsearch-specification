
package org.elasticsearch.cluster.nodes_info;

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
import org.elasticsearch.internal.*;

public class NodeProcessInfo  implements XContentable<NodeProcessInfo> {
  
  static final ParseField ID = new ParseField("id");
  private Long _id;
  public Long getId() { return this._id; }
  public NodeProcessInfo setId(Long val) { this._id = val; return this; }


  static final ParseField MLOCKALL = new ParseField("mlockall");
  private Boolean _mlockall;
  public Boolean getMlockall() { return this._mlockall; }
  public NodeProcessInfo setMlockall(Boolean val) { this._mlockall = val; return this; }


  static final ParseField REFRESH_INTERVAL_IN_MILLIS = new ParseField("refresh_interval_in_millis");
  private Long _refreshIntervalInMillis;
  public Long getRefreshIntervalInMillis() { return this._refreshIntervalInMillis; }
  public NodeProcessInfo setRefreshIntervalInMillis(Long val) { this._refreshIntervalInMillis = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_id != null) {
      builder.field(ID.getPreferredName(), _id);
    }
    if (_mlockall != null) {
      builder.field(MLOCKALL.getPreferredName(), _mlockall);
    }
    if (_refreshIntervalInMillis != null) {
      builder.field(REFRESH_INTERVAL_IN_MILLIS.getPreferredName(), _refreshIntervalInMillis);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public NodeProcessInfo fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return NodeProcessInfo.PARSER.apply(parser, null);
  }

  public static final ObjectParser<NodeProcessInfo, Void> PARSER =
    new ObjectParser<>(NodeProcessInfo.class.getName(), false, NodeProcessInfo::new);

  static {
    PARSER.declareLong(NodeProcessInfo::setId, ID);
    PARSER.declareBoolean(NodeProcessInfo::setMlockall, MLOCKALL);
    PARSER.declareLong(NodeProcessInfo::setRefreshIntervalInMillis, REFRESH_INTERVAL_IN_MILLIS);
  }

}
