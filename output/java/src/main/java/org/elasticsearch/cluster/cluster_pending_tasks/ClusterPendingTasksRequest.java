
package org.elasticsearch.cluster.cluster_pending_tasks;

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
import org.elasticsearch.common_options.time_unit.*;

public class ClusterPendingTasksRequest  implements XContentable<ClusterPendingTasksRequest> {
  
  static final ParseField LOCAL = new ParseField("local");
  private Boolean _local;
  public Boolean getLocal() { return this._local; }
  public ClusterPendingTasksRequest setLocal(Boolean val) { this._local = val; return this; }


  static final ParseField MASTER_TIMEOUT = new ParseField("master_timeout");
  private Time _masterTimeout;
  public Time getMasterTimeout() { return this._masterTimeout; }
  public ClusterPendingTasksRequest setMasterTimeout(Time val) { this._masterTimeout = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_local != null) {
      builder.field(LOCAL.getPreferredName(), _local);
    }
    if (_masterTimeout != null) {
      builder.field(MASTER_TIMEOUT.getPreferredName());
      _masterTimeout.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ClusterPendingTasksRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ClusterPendingTasksRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ClusterPendingTasksRequest, Void> PARSER =
    new ObjectParser<>(ClusterPendingTasksRequest.class.getName(), false, ClusterPendingTasksRequest::new);

  static {
    PARSER.declareBoolean(ClusterPendingTasksRequest::setLocal, LOCAL);
    PARSER.declareObject(ClusterPendingTasksRequest::setMasterTimeout, (p, t) -> Time.PARSER.apply(p, t), MASTER_TIMEOUT);
  }

}
