
package org.elasticsearch.x_pack.roll_up.get_rollup_job;

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
import org.elasticsearch.x_pack.roll_up.get_rollup_job.*;

public class RollupJobInformation  implements XContentable<RollupJobInformation> {
  
  static final ParseField CONFIG = new ParseField("config");
  private RollupJobConfiguration _config;
  public RollupJobConfiguration getConfig() { return this._config; }
  public RollupJobInformation setConfig(RollupJobConfiguration val) { this._config = val; return this; }


  static final ParseField STATS = new ParseField("stats");
  private RollupJobStats _stats;
  public RollupJobStats getStats() { return this._stats; }
  public RollupJobInformation setStats(RollupJobStats val) { this._stats = val; return this; }


  static final ParseField STATUS = new ParseField("status");
  private RollupJobStatus _status;
  public RollupJobStatus getStatus() { return this._status; }
  public RollupJobInformation setStatus(RollupJobStatus val) { this._status = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_config != null) {
      builder.field(CONFIG.getPreferredName());
      _config.toXContent(builder, params);
    }
    if (_stats != null) {
      builder.field(STATS.getPreferredName());
      _stats.toXContent(builder, params);
    }
    if (_status != null) {
      builder.field(STATUS.getPreferredName());
      _status.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public RollupJobInformation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RollupJobInformation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RollupJobInformation, Void> PARSER =
    new ObjectParser<>(RollupJobInformation.class.getName(), false, RollupJobInformation::new);

  static {
    PARSER.declareObject(RollupJobInformation::setConfig, (p, t) -> RollupJobConfiguration.PARSER.apply(p, t), CONFIG);
    PARSER.declareObject(RollupJobInformation::setStats, (p, t) -> RollupJobStats.PARSER.apply(p, t), STATS);
    PARSER.declareObject(RollupJobInformation::setStatus, (p, t) -> RollupJobStatus.PARSER.apply(p, t), STATUS);
  }

}
