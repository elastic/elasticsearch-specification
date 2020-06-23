
package org.elasticsearch.indices.monitoring.indices_recovery;

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

public class RecoveryVerifyIndex  implements XContentable<RecoveryVerifyIndex> {
  
  static final ParseField CHECK_INDEX_TIME_IN_MILLIS = new ParseField("check_index_time_in_millis");
  private Long _checkIndexTimeInMillis;
  public Long getCheckIndexTimeInMillis() { return this._checkIndexTimeInMillis; }
  public RecoveryVerifyIndex setCheckIndexTimeInMillis(Long val) { this._checkIndexTimeInMillis = val; return this; }


  static final ParseField TOTAL_TIME_IN_MILLIS = new ParseField("total_time_in_millis");
  private Long _totalTimeInMillis;
  public Long getTotalTimeInMillis() { return this._totalTimeInMillis; }
  public RecoveryVerifyIndex setTotalTimeInMillis(Long val) { this._totalTimeInMillis = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_checkIndexTimeInMillis != null) {
      builder.field(CHECK_INDEX_TIME_IN_MILLIS.getPreferredName(), _checkIndexTimeInMillis);
    }
    if (_totalTimeInMillis != null) {
      builder.field(TOTAL_TIME_IN_MILLIS.getPreferredName(), _totalTimeInMillis);
    }
    builder.endObject();
    return builder;
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
