
package org.elasticsearch.cluster.nodes_stats;

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

public class JvmClassesStats  implements XContentable<JvmClassesStats> {
  
  static final ParseField CURRENT_LOADED_COUNT = new ParseField("current_loaded_count");
  private long _currentLoadedCount;
  private boolean _currentLoadedCount$isSet;
  public long getCurrentLoadedCount() { return this._currentLoadedCount; }
  public JvmClassesStats setCurrentLoadedCount(long val) {
    this._currentLoadedCount = val;
    _currentLoadedCount$isSet = true;
    return this;
  }

  static final ParseField TOTAL_LOADED_COUNT = new ParseField("total_loaded_count");
  private long _totalLoadedCount;
  private boolean _totalLoadedCount$isSet;
  public long getTotalLoadedCount() { return this._totalLoadedCount; }
  public JvmClassesStats setTotalLoadedCount(long val) {
    this._totalLoadedCount = val;
    _totalLoadedCount$isSet = true;
    return this;
  }

  static final ParseField TOTAL_UNLOADED_COUNT = new ParseField("total_unloaded_count");
  private long _totalUnloadedCount;
  private boolean _totalUnloadedCount$isSet;
  public long getTotalUnloadedCount() { return this._totalUnloadedCount; }
  public JvmClassesStats setTotalUnloadedCount(long val) {
    this._totalUnloadedCount = val;
    _totalUnloadedCount$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_currentLoadedCount$isSet) {
      builder.field(CURRENT_LOADED_COUNT.getPreferredName(), _currentLoadedCount);
    }
    if (_totalLoadedCount$isSet) {
      builder.field(TOTAL_LOADED_COUNT.getPreferredName(), _totalLoadedCount);
    }
    if (_totalUnloadedCount$isSet) {
      builder.field(TOTAL_UNLOADED_COUNT.getPreferredName(), _totalUnloadedCount);
    }
  }

  @Override
  public JvmClassesStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return JvmClassesStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<JvmClassesStats, Void> PARSER =
    new ObjectParser<>(JvmClassesStats.class.getName(), false, JvmClassesStats::new);

  static {
    PARSER.declareLong(JvmClassesStats::setCurrentLoadedCount, CURRENT_LOADED_COUNT);
    PARSER.declareLong(JvmClassesStats::setTotalLoadedCount, TOTAL_LOADED_COUNT);
    PARSER.declareLong(JvmClassesStats::setTotalUnloadedCount, TOTAL_UNLOADED_COUNT);
  }

}
