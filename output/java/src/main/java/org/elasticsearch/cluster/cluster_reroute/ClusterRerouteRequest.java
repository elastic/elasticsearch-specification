
package org.elasticsearch.cluster.cluster_reroute;

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
import org.elasticsearch.cluster.cluster_reroute.commands.*;
import org.elasticsearch.common_options.time_unit.*;

public class ClusterRerouteRequest  implements XContentable<ClusterRerouteRequest> {
  
  static final ParseField COMMANDS = new ParseField("commands");
  private List<ClusterRerouteCommand> _commands;
  public List<ClusterRerouteCommand> getCommands() { return this._commands; }
  public ClusterRerouteRequest setCommands(List<ClusterRerouteCommand> val) { this._commands = val; return this; }


  static final ParseField DRY_RUN = new ParseField("dry_run");
  private Boolean _dryRun;
  public Boolean getDryRun() { return this._dryRun; }
  public ClusterRerouteRequest setDryRun(Boolean val) { this._dryRun = val; return this; }


  static final ParseField EXPLAIN = new ParseField("explain");
  private Boolean _explain;
  public Boolean getExplain() { return this._explain; }
  public ClusterRerouteRequest setExplain(Boolean val) { this._explain = val; return this; }


  static final ParseField MASTER_TIMEOUT = new ParseField("master_timeout");
  private Time _masterTimeout;
  public Time getMasterTimeout() { return this._masterTimeout; }
  public ClusterRerouteRequest setMasterTimeout(Time val) { this._masterTimeout = val; return this; }


  static final ParseField METRIC = new ParseField("metric");
  private List<String> _metric;
  public List<String> getMetric() { return this._metric; }
  public ClusterRerouteRequest setMetric(List<String> val) { this._metric = val; return this; }


  static final ParseField RETRY_FAILED = new ParseField("retry_failed");
  private Boolean _retryFailed;
  public Boolean getRetryFailed() { return this._retryFailed; }
  public ClusterRerouteRequest setRetryFailed(Boolean val) { this._retryFailed = val; return this; }


  static final ParseField TIMEOUT = new ParseField("timeout");
  private Time _timeout;
  public Time getTimeout() { return this._timeout; }
  public ClusterRerouteRequest setTimeout(Time val) { this._timeout = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_commands != null) {
      builder.array(COMMANDS.getPreferredName(), _commands);
    }
    if (_dryRun != null) {
      builder.field(DRY_RUN.getPreferredName(), _dryRun);
    }
    if (_explain != null) {
      builder.field(EXPLAIN.getPreferredName(), _explain);
    }
    if (_masterTimeout != null) {
      builder.field(MASTER_TIMEOUT.getPreferredName());
      _masterTimeout.toXContent(builder, params);
    }
    if (_metric != null) {
      builder.array(METRIC.getPreferredName(), _metric);
    }
    if (_retryFailed != null) {
      builder.field(RETRY_FAILED.getPreferredName(), _retryFailed);
    }
    if (_timeout != null) {
      builder.field(TIMEOUT.getPreferredName());
      _timeout.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ClusterRerouteRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ClusterRerouteRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ClusterRerouteRequest, Void> PARSER =
    new ObjectParser<>(ClusterRerouteRequest.class.getName(), false, ClusterRerouteRequest::new);

  static {
    PARSER.declareObjectArray(ClusterRerouteRequest::setCommands, (p, t) -> ClusterRerouteCommand.PARSER.apply(p, t), COMMANDS);
    PARSER.declareBoolean(ClusterRerouteRequest::setDryRun, DRY_RUN);
    PARSER.declareBoolean(ClusterRerouteRequest::setExplain, EXPLAIN);
    PARSER.declareObject(ClusterRerouteRequest::setMasterTimeout, (p, t) -> Time.PARSER.apply(p, t), MASTER_TIMEOUT);
    PARSER.declareStringArray(ClusterRerouteRequest::setMetric, METRIC);
    PARSER.declareBoolean(ClusterRerouteRequest::setRetryFailed, RETRY_FAILED);
    PARSER.declareObject(ClusterRerouteRequest::setTimeout, (p, t) -> Time.PARSER.apply(p, t), TIMEOUT);
  }

}
