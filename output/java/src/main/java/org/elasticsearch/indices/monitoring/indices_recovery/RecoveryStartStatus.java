
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

public class RecoveryStartStatus  implements XContentable<RecoveryStartStatus> {
  
  static final ParseField CHECK_INDEX_TIME = new ParseField("check_index_time");
  private Long _checkIndexTime;
  public Long getCheckIndexTime() { return this._checkIndexTime; }
  public RecoveryStartStatus setCheckIndexTime(Long val) { this._checkIndexTime = val; return this; }


  static final ParseField TOTAL_TIME_IN_MILLIS = new ParseField("total_time_in_millis");
  private String _totalTimeInMillis;
  public String getTotalTimeInMillis() { return this._totalTimeInMillis; }
  public RecoveryStartStatus setTotalTimeInMillis(String val) { this._totalTimeInMillis = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_checkIndexTime != null) {
      builder.field(CHECK_INDEX_TIME.getPreferredName(), _checkIndexTime);
    }
    if (_totalTimeInMillis != null) {
      builder.field(TOTAL_TIME_IN_MILLIS.getPreferredName(), _totalTimeInMillis);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public RecoveryStartStatus fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RecoveryStartStatus.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RecoveryStartStatus, Void> PARSER =
    new ObjectParser<>(RecoveryStartStatus.class.getName(), false, RecoveryStartStatus::new);

  static {
    PARSER.declareLong(RecoveryStartStatus::setCheckIndexTime, CHECK_INDEX_TIME);
    PARSER.declareString(RecoveryStartStatus::setTotalTimeInMillis, TOTAL_TIME_IN_MILLIS);
  }

}
