
package org.elasticsearch.cluster.nodes_info;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.internal.*;

public class NodeProcessInfo  implements XContentable<NodeProcessInfo> {
  
  static final ParseField ID = new ParseField("id");
  private long _id;
  private boolean _id$isSet;
  public long getId() { return this._id; }
  public NodeProcessInfo setId(long val) {
    this._id = val;
    _id$isSet = true;
    return this;
  }

  static final ParseField MLOCKALL = new ParseField("mlockall");
  private Boolean _mlockall;
  public Boolean getMlockall() { return this._mlockall; }
  public NodeProcessInfo setMlockall(Boolean val) { this._mlockall = val; return this; }

  static final ParseField REFRESH_INTERVAL_IN_MILLIS = new ParseField("refresh_interval_in_millis");
  private long _refreshIntervalInMillis;
  private boolean _refreshIntervalInMillis$isSet;
  public long getRefreshIntervalInMillis() { return this._refreshIntervalInMillis; }
  public NodeProcessInfo setRefreshIntervalInMillis(long val) {
    this._refreshIntervalInMillis = val;
    _refreshIntervalInMillis$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_id$isSet) {
      builder.field(ID.getPreferredName(), _id);
    }
    if (_mlockall != null) {
      builder.field(MLOCKALL.getPreferredName(), _mlockall);
    }
    if (_refreshIntervalInMillis$isSet) {
      builder.field(REFRESH_INTERVAL_IN_MILLIS.getPreferredName(), _refreshIntervalInMillis);
    }
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
