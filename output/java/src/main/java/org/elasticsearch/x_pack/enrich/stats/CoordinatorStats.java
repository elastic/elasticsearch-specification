
package org.elasticsearch.x_pack.enrich.stats;

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

public class CoordinatorStats  implements XContentable<CoordinatorStats> {
  
  static final ParseField EXECUTED_SEARCHES_TOTAL = new ParseField("executed_searches_total");
  private long _executedSearchesTotal;
  private boolean _executedSearchesTotal$isSet;
  public long getExecutedSearchesTotal() { return this._executedSearchesTotal; }
  public CoordinatorStats setExecutedSearchesTotal(long val) {
    this._executedSearchesTotal = val;
    _executedSearchesTotal$isSet = true;
    return this;
  }

  static final ParseField NODE_ID = new ParseField("node_id");
  private String _nodeId;
  public String getNodeId() { return this._nodeId; }
  public CoordinatorStats setNodeId(String val) { this._nodeId = val; return this; }

  static final ParseField QUEUE_SIZE = new ParseField("queue_size");
  private int _queueSize;
  private boolean _queueSize$isSet;
  public int getQueueSize() { return this._queueSize; }
  public CoordinatorStats setQueueSize(int val) {
    this._queueSize = val;
    _queueSize$isSet = true;
    return this;
  }

  static final ParseField REMOTE_REQUESTS_CURRENT = new ParseField("remote_requests_current");
  private int _remoteRequestsCurrent;
  private boolean _remoteRequestsCurrent$isSet;
  public int getRemoteRequestsCurrent() { return this._remoteRequestsCurrent; }
  public CoordinatorStats setRemoteRequestsCurrent(int val) {
    this._remoteRequestsCurrent = val;
    _remoteRequestsCurrent$isSet = true;
    return this;
  }

  static final ParseField REMOTE_REQUESTS_TOTAL = new ParseField("remote_requests_total");
  private long _remoteRequestsTotal;
  private boolean _remoteRequestsTotal$isSet;
  public long getRemoteRequestsTotal() { return this._remoteRequestsTotal; }
  public CoordinatorStats setRemoteRequestsTotal(long val) {
    this._remoteRequestsTotal = val;
    _remoteRequestsTotal$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_executedSearchesTotal$isSet) {
      builder.field(EXECUTED_SEARCHES_TOTAL.getPreferredName(), _executedSearchesTotal);
    }
    if (_nodeId != null) {
      builder.field(NODE_ID.getPreferredName(), _nodeId);
    }
    if (_queueSize$isSet) {
      builder.field(QUEUE_SIZE.getPreferredName(), _queueSize);
    }
    if (_remoteRequestsCurrent$isSet) {
      builder.field(REMOTE_REQUESTS_CURRENT.getPreferredName(), _remoteRequestsCurrent);
    }
    if (_remoteRequestsTotal$isSet) {
      builder.field(REMOTE_REQUESTS_TOTAL.getPreferredName(), _remoteRequestsTotal);
    }
  }

  @Override
  public CoordinatorStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CoordinatorStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CoordinatorStats, Void> PARSER =
    new ObjectParser<>(CoordinatorStats.class.getName(), false, CoordinatorStats::new);

  static {
    PARSER.declareLong(CoordinatorStats::setExecutedSearchesTotal, EXECUTED_SEARCHES_TOTAL);
    PARSER.declareString(CoordinatorStats::setNodeId, NODE_ID);
    PARSER.declareInt(CoordinatorStats::setQueueSize, QUEUE_SIZE);
    PARSER.declareInt(CoordinatorStats::setRemoteRequestsCurrent, REMOTE_REQUESTS_CURRENT);
    PARSER.declareLong(CoordinatorStats::setRemoteRequestsTotal, REMOTE_REQUESTS_TOTAL);
  }

}
