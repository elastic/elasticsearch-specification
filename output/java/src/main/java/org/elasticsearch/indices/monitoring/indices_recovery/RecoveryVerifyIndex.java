
package org.elasticsearch.indices.monitoring.indices_recovery;

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

public class RecoveryVerifyIndex  implements XContentable<RecoveryVerifyIndex> {
  
  static final ParseField CHECK_INDEX_TIME_IN_MILLIS = new ParseField("check_index_time_in_millis");
  private long _checkIndexTimeInMillis;
  private boolean _checkIndexTimeInMillis$isSet;
  public long getCheckIndexTimeInMillis() { return this._checkIndexTimeInMillis; }
  public RecoveryVerifyIndex setCheckIndexTimeInMillis(long val) {
    this._checkIndexTimeInMillis = val;
    _checkIndexTimeInMillis$isSet = true;
    return this;
  }

  static final ParseField TOTAL_TIME_IN_MILLIS = new ParseField("total_time_in_millis");
  private long _totalTimeInMillis;
  private boolean _totalTimeInMillis$isSet;
  public long getTotalTimeInMillis() { return this._totalTimeInMillis; }
  public RecoveryVerifyIndex setTotalTimeInMillis(long val) {
    this._totalTimeInMillis = val;
    _totalTimeInMillis$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_checkIndexTimeInMillis$isSet) {
      builder.field(CHECK_INDEX_TIME_IN_MILLIS.getPreferredName(), _checkIndexTimeInMillis);
    }
    if (_totalTimeInMillis$isSet) {
      builder.field(TOTAL_TIME_IN_MILLIS.getPreferredName(), _totalTimeInMillis);
    }
  }

  @Override
  public RecoveryVerifyIndex fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RecoveryVerifyIndex.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RecoveryVerifyIndex, Void> PARSER =
    new ObjectParser<>(RecoveryVerifyIndex.class.getName(), false, RecoveryVerifyIndex::new);

  static {
    PARSER.declareLong(RecoveryVerifyIndex::setCheckIndexTimeInMillis, CHECK_INDEX_TIME_IN_MILLIS);
    PARSER.declareLong(RecoveryVerifyIndex::setTotalTimeInMillis, TOTAL_TIME_IN_MILLIS);
  }

}
