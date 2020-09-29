
package org.elasticsearch.x_pack.slm.put_lifecycle;

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
import org.elasticsearch.common_abstractions.request.*;

public class PutSnapshotLifecycleRequest extends RequestBase<PutSnapshotLifecycleRequest> implements XContentable<PutSnapshotLifecycleRequest> {
  
  static final ParseField CONFIG = new ParseField("config");
  private SnapshotLifecycleConfig _config;
  public SnapshotLifecycleConfig getConfig() { return this._config; }
  public PutSnapshotLifecycleRequest setConfig(SnapshotLifecycleConfig val) { this._config = val; return this; }

  static final ParseField NAME = new ParseField("name");
  private String _name;
  public String getName() { return this._name; }
  public PutSnapshotLifecycleRequest setName(String val) { this._name = val; return this; }

  static final ParseField REPOSITORY = new ParseField("repository");
  private String _repository;
  public String getRepository() { return this._repository; }
  public PutSnapshotLifecycleRequest setRepository(String val) { this._repository = val; return this; }

  static final ParseField RETENTION = new ParseField("retention");
  private SnapshotRetentionConfiguration _retention;
  public SnapshotRetentionConfiguration getRetention() { return this._retention; }
  public PutSnapshotLifecycleRequest setRetention(SnapshotRetentionConfiguration val) { this._retention = val; return this; }

  static final ParseField SCHEDULE = new ParseField("schedule");
  private CronExpression _schedule;
  public CronExpression getSchedule() { return this._schedule; }
  public PutSnapshotLifecycleRequest setSchedule(CronExpression val) { this._schedule = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
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
  public PutSnapshotLifecycleRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PutSnapshotLifecycleRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PutSnapshotLifecycleRequest, Void> PARSER =
    new ObjectParser<>(PutSnapshotLifecycleRequest.class.getName(), false, PutSnapshotLifecycleRequest::new);

  static {
    PARSER.declareObject(PutSnapshotLifecycleRequest::setConfig, (p, t) -> SnapshotLifecycleConfig.PARSER.apply(p, t), CONFIG);
    PARSER.declareString(PutSnapshotLifecycleRequest::setName, NAME);
    PARSER.declareString(PutSnapshotLifecycleRequest::setRepository, REPOSITORY);
    PARSER.declareObject(PutSnapshotLifecycleRequest::setRetention, (p, t) -> SnapshotRetentionConfiguration.PARSER.apply(p, t), RETENTION);
    PARSER.declareObject(PutSnapshotLifecycleRequest::setSchedule, (p, t) -> CronExpression.PARSER.apply(p, t), SCHEDULE);
  }

}
