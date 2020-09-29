
package org.elasticsearch.x_pack.slm;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.x_pack.slm.*;
import org.elasticsearch.x_pack.watcher.schedule.*;

public class SnapshotLifecyclePolicy  implements XContentable<SnapshotLifecyclePolicy> {
  
  static final ParseField CONFIG = new ParseField("config");
  private SnapshotLifecycleConfig _config;
  public SnapshotLifecycleConfig getConfig() { return this._config; }
  public SnapshotLifecyclePolicy setConfig(SnapshotLifecycleConfig val) { this._config = val; return this; }

  static final ParseField NAME = new ParseField("name");
  private String _name;
  public String getName() { return this._name; }
  public SnapshotLifecyclePolicy setName(String val) { this._name = val; return this; }

  static final ParseField REPOSITORY = new ParseField("repository");
  private String _repository;
  public String getRepository() { return this._repository; }
  public SnapshotLifecyclePolicy setRepository(String val) { this._repository = val; return this; }

  static final ParseField RETENTION = new ParseField("retention");
  private SnapshotRetentionConfiguration _retention;
  public SnapshotRetentionConfiguration getRetention() { return this._retention; }
  public SnapshotLifecyclePolicy setRetention(SnapshotRetentionConfiguration val) { this._retention = val; return this; }

  static final ParseField SCHEDULE = new ParseField("schedule");
  private CronExpression _schedule;
  public CronExpression getSchedule() { return this._schedule; }
  public SnapshotLifecyclePolicy setSchedule(CronExpression val) { this._schedule = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_config != null) {
      builder.field(CONFIG.getPreferredName());
      _config.toXContent(builder, params);
    }
    if (_name != null) {
      builder.field(NAME.getPreferredName(), _name);
    }
    if (_repository != null) {
      builder.field(REPOSITORY.getPreferredName(), _repository);
    }
    if (_retention != null) {
      builder.field(RETENTION.getPreferredName());
      _retention.toXContent(builder, params);
    }
    if (_schedule != null) {
      builder.field(SCHEDULE.getPreferredName());
      _schedule.toXContent(builder, params);
    }
  }

  @Override
  public SnapshotLifecyclePolicy fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SnapshotLifecyclePolicy.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SnapshotLifecyclePolicy, Void> PARSER =
    new ObjectParser<>(SnapshotLifecyclePolicy.class.getName(), false, SnapshotLifecyclePolicy::new);

  static {
    PARSER.declareObject(SnapshotLifecyclePolicy::setConfig, (p, t) -> SnapshotLifecycleConfig.PARSER.apply(p, t), CONFIG);
    PARSER.declareString(SnapshotLifecyclePolicy::setName, NAME);
    PARSER.declareString(SnapshotLifecyclePolicy::setRepository, REPOSITORY);
    PARSER.declareObject(SnapshotLifecyclePolicy::setRetention, (p, t) -> SnapshotRetentionConfiguration.PARSER.apply(p, t), RETENTION);
    PARSER.declareObject(SnapshotLifecyclePolicy::setSchedule, (p, t) -> CronExpression.PARSER.apply(p, t), SCHEDULE);
  }

}
