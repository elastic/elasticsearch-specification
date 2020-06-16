
package org.elasticsearch.common_options.stats;

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

public class RecoveryStats  implements XContentable<RecoveryStats> {
  
  static final ParseField CURRENT_AS_SOURCE = new ParseField("current_as_source");
  private Long _currentAsSource;
  public Long getCurrentAsSource() { return this._currentAsSource; }
  public RecoveryStats setCurrentAsSource(Long val) { this._currentAsSource = val; return this; }


  static final ParseField CURRENT_AS_TARGET = new ParseField("current_as_target");
  private Long _currentAsTarget;
  public Long getCurrentAsTarget() { return this._currentAsTarget; }
  public RecoveryStats setCurrentAsTarget(Long val) { this._currentAsTarget = val; return this; }


  static final ParseField THROTTLE_TIME = new ParseField("throttle_time");
  private String _throttleTime;
  public String getThrottleTime() { return this._throttleTime; }
  public RecoveryStats setThrottleTime(String val) { this._throttleTime = val; return this; }


  static final ParseField THROTTLE_TIME_IN_MILLIS = new ParseField("throttle_time_in_millis");
  private Long _throttleTimeInMillis;
  public Long getThrottleTimeInMillis() { return this._throttleTimeInMillis; }
  public RecoveryStats setThrottleTimeInMillis(Long val) { this._throttleTimeInMillis = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_currentAsSource != null) {
      builder.field(CURRENT_AS_SOURCE.getPreferredName(), _currentAsSource);
    }
    if (_currentAsTarget != null) {
      builder.field(CURRENT_AS_TARGET.getPreferredName(), _currentAsTarget);
    }
    if (_throttleTime != null) {
      builder.field(THROTTLE_TIME.getPreferredName(), _throttleTime);
    }
    if (_throttleTimeInMillis != null) {
      builder.field(THROTTLE_TIME_IN_MILLIS.getPreferredName(), _throttleTimeInMillis);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public RecoveryStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RecoveryStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RecoveryStats, Void> PARSER =
    new ObjectParser<>(RecoveryStats.class.getName(), false, RecoveryStats::new);

  static {
    PARSER.declareLong(RecoveryStats::setCurrentAsSource, CURRENT_AS_SOURCE);
    PARSER.declareLong(RecoveryStats::setCurrentAsTarget, CURRENT_AS_TARGET);
    PARSER.declareString(RecoveryStats::setThrottleTime, THROTTLE_TIME);
    PARSER.declareLong(RecoveryStats::setThrottleTimeInMillis, THROTTLE_TIME_IN_MILLIS);
  }

}
