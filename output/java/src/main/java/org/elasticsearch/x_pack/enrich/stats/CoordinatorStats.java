
package org.elasticsearch.x_pack.enrich.stats;

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

public class CoordinatorStats  implements XContentable<CoordinatorStats> {
  
  static final ParseField NODE_ID = new ParseField("node_id");
  private String _nodeId;
  public String getNodeId() { return this._nodeId; }
  public CoordinatorStats setNodeId(String val) { this._nodeId = val; return this; }


  static final ParseField QUEUE_SIZE = new ParseField("queue_size");
  private Integer _queueSize;
  public Integer getQueueSize() { return this._queueSize; }
  public CoordinatorStats setQueueSize(Integer val) { this._queueSize = val; return this; }


  static final ParseField REMOTE_REQUESTS_CURRENT = new ParseField("remote_requests_current");
  private Integer _remoteRequestsCurrent;
  public Integer getRemoteRequestsCurrent() { return this._remoteRequestsCurrent; }
  public CoordinatorStats setRemoteRequestsCurrent(Integer val) { this._remoteRequestsCurrent = val; return this; }


  static final ParseField REMOTE_REQUESTS_TOTAL = new ParseField("remote_requests_total");
  private Long _remoteRequestsTotal;
  public Long getRemoteRequestsTotal() { return this._remoteRequestsTotal; }
  public CoordinatorStats setRemoteRequestsTotal(Long val) { this._remoteRequestsTotal = val; return this; }


  static final ParseField EXECUTED_SEARCHES_TOTAL = new ParseField("executed_searches_total");
  private Long _executedSearchesTotal;
  public Long getExecutedSearchesTotal() { return this._executedSearchesTotal; }
  public CoordinatorStats setExecutedSearchesTotal(Long val) { this._executedSearchesTotal = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_nodeId != null) {
      builder.field(NODE_ID.getPreferredName(), _nodeId);
    }
    if (_queueSize != null) {
      builder.field(QUEUE_SIZE.getPreferredName(), _queueSize);
    }
    if (_remoteRequestsCurrent != null) {
      builder.field(REMOTE_REQUESTS_CURRENT.getPreferredName(), _remoteRequestsCurrent);
    }
    if (_remoteRequestsTotal != null) {
      builder.field(REMOTE_REQUESTS_TOTAL.getPreferredName(), _remoteRequestsTotal);
    }
    if (_executedSearchesTotal != null) {
      builder.field(EXECUTED_SEARCHES_TOTAL.getPreferredName(), _executedSearchesTotal);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public CoordinatorStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CoordinatorStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CoordinatorStats, Void> PARSER =
    new ObjectParser<>(CoordinatorStats.class.getName(), false, CoordinatorStats::new);

  static {
    PARSER.declareString(CoordinatorStats::setNodeId, NODE_ID);
    PARSER.declareInt(CoordinatorStats::setQueueSize, QUEUE_SIZE);
    PARSER.declareInt(CoordinatorStats::setRemoteRequestsCurrent, REMOTE_REQUESTS_CURRENT);
    PARSER.declareLong(CoordinatorStats::setRemoteRequestsTotal, REMOTE_REQUESTS_TOTAL);
    PARSER.declareLong(CoordinatorStats::setExecutedSearchesTotal, EXECUTED_SEARCHES_TOTAL);
  }

}
