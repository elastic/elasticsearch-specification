
package org.elasticsearch.indices.monitoring.indices_stats;

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

public class ShardStatsRecovery  implements XContentable<ShardStatsRecovery> {
  
  static final ParseField CURRENT_AS_SOURCE = new ParseField("current_as_source");
  private long _currentAsSource;
  private boolean _currentAsSource$isSet;
  public long getCurrentAsSource() { return this._currentAsSource; }
  public ShardStatsRecovery setCurrentAsSource(long val) {
    this._currentAsSource = val;
    _currentAsSource$isSet = true;
    return this;
  }

  static final ParseField CURRENT_AS_TARGET = new ParseField("current_as_target");
  private long _currentAsTarget;
  private boolean _currentAsTarget$isSet;
  public long getCurrentAsTarget() { return this._currentAsTarget; }
  public ShardStatsRecovery setCurrentAsTarget(long val) {
    this._currentAsTarget = val;
    _currentAsTarget$isSet = true;
    return this;
  }

  static final ParseField THROTTLE_TIME_IN_MILLIS = new ParseField("throttle_time_in_millis");
  private long _throttleTimeInMillis;
  private boolean _throttleTimeInMillis$isSet;
  public long getThrottleTimeInMillis() { return this._throttleTimeInMillis; }
  public ShardStatsRecovery setThrottleTimeInMillis(long val) {
    this._throttleTimeInMillis = val;
    _throttleTimeInMillis$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_currentAsSource$isSet) {
      builder.field(CURRENT_AS_SOURCE.getPreferredName(), _currentAsSource);
    }
    if (_currentAsTarget$isSet) {
      builder.field(CURRENT_AS_TARGET.getPreferredName(), _currentAsTarget);
    }
    if (_throttleTimeInMillis$isSet) {
      builder.field(THROTTLE_TIME_IN_MILLIS.getPreferredName(), _throttleTimeInMillis);
    }
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
