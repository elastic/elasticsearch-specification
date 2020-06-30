
package org.elasticsearch.indices.monitoring.indices_stats;

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

public class ShardStatsRecovery  implements XContentable<ShardStatsRecovery> {
  
  static final ParseField CURRENT_AS_SOURCE = new ParseField("current_as_source");
  private Long _currentAsSource;
  public Long getCurrentAsSource() { return this._currentAsSource; }
  public ShardStatsRecovery setCurrentAsSource(Long val) { this._currentAsSource = val; return this; }


  static final ParseField CURRENT_AS_TARGET = new ParseField("current_as_target");
  private Long _currentAsTarget;
  public Long getCurrentAsTarget() { return this._currentAsTarget; }
  public ShardStatsRecovery setCurrentAsTarget(Long val) { this._currentAsTarget = val; return this; }


  static final ParseField THROTTLE_TIME_IN_MILLIS = new ParseField("throttle_time_in_millis");
  private Long _throttleTimeInMillis;
  public Long getThrottleTimeInMillis() { return this._throttleTimeInMillis; }
  public ShardStatsRecovery setThrottleTimeInMillis(Long val) { this._throttleTimeInMillis = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_currentAsSource != null) {
      builder.field(CURRENT_AS_SOURCE.getPreferredName(), _currentAsSource);
    }
    if (_currentAsTarget != null) {
      builder.field(CURRENT_AS_TARGET.getPreferredName(), _currentAsTarget);
    }
    if (_throttleTimeInMillis != null) {
      builder.field(THROTTLE_TIME_IN_MILLIS.getPreferredName(), _throttleTimeInMillis);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ShardStatsRecovery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ShardStatsRecovery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ShardStatsRecovery, Void> PARSER =
    new ObjectParser<>(ShardStatsRecovery.class.getName(), false, ShardStatsRecovery::new);

  static {
    PARSER.declareLong(ShardStatsRecovery::setCurrentAsSource, CURRENT_AS_SOURCE);
    PARSER.declareLong(ShardStatsRecovery::setCurrentAsTarget, CURRENT_AS_TARGET);
    PARSER.declareLong(ShardStatsRecovery::setThrottleTimeInMillis, THROTTLE_TIME_IN_MILLIS);
  }

}
