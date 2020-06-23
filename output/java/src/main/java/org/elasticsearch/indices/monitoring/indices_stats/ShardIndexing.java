
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

public class ShardIndexing  implements XContentable<ShardIndexing> {
  
  static final ParseField DELETE_CURRENT = new ParseField("delete_current");
  private Long _deleteCurrent;
  public Long getDeleteCurrent() { return this._deleteCurrent; }
  public ShardIndexing setDeleteCurrent(Long val) { this._deleteCurrent = val; return this; }


  static final ParseField DELETE_TIME_IN_MILLIS = new ParseField("delete_time_in_millis");
  private Long _deleteTimeInMillis;
  public Long getDeleteTimeInMillis() { return this._deleteTimeInMillis; }
  public ShardIndexing setDeleteTimeInMillis(Long val) { this._deleteTimeInMillis = val; return this; }


  static final ParseField DELETE_TOTAL = new ParseField("delete_total");
  private Long _deleteTotal;
  public Long getDeleteTotal() { return this._deleteTotal; }
  public ShardIndexing setDeleteTotal(Long val) { this._deleteTotal = val; return this; }


  static final ParseField INDEX_CURRENT = new ParseField("index_current");
  private Long _indexCurrent;
  public Long getIndexCurrent() { return this._indexCurrent; }
  public ShardIndexing setIndexCurrent(Long val) { this._indexCurrent = val; return this; }


  static final ParseField INDEX_FAILED = new ParseField("index_failed");
  private Long _indexFailed;
  public Long getIndexFailed() { return this._indexFailed; }
  public ShardIndexing setIndexFailed(Long val) { this._indexFailed = val; return this; }


  static final ParseField INDEX_TIME_IN_MILLIS = new ParseField("index_time_in_millis");
  private Long _indexTimeInMillis;
  public Long getIndexTimeInMillis() { return this._indexTimeInMillis; }
  public ShardIndexing setIndexTimeInMillis(Long val) { this._indexTimeInMillis = val; return this; }


  static final ParseField INDEX_TOTAL = new ParseField("index_total");
  private Long _indexTotal;
  public Long getIndexTotal() { return this._indexTotal; }
  public ShardIndexing setIndexTotal(Long val) { this._indexTotal = val; return this; }


  static final ParseField IS_THROTTLED = new ParseField("is_throttled");
  private Boolean _isThrottled;
  public Boolean getIsThrottled() { return this._isThrottled; }
  public ShardIndexing setIsThrottled(Boolean val) { this._isThrottled = val; return this; }


  static final ParseField NOOP_UPDATE_TOTAL = new ParseField("noop_update_total");
  private Long _noopUpdateTotal;
  public Long getNoopUpdateTotal() { return this._noopUpdateTotal; }
  public ShardIndexing setNoopUpdateTotal(Long val) { this._noopUpdateTotal = val; return this; }


  static final ParseField THROTTLE_TIME_IN_MILLIS = new ParseField("throttle_time_in_millis");
  private Long _throttleTimeInMillis;
  public Long getThrottleTimeInMillis() { return this._throttleTimeInMillis; }
  public ShardIndexing setThrottleTimeInMillis(Long val) { this._throttleTimeInMillis = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_deleteCurrent != null) {
      builder.field(DELETE_CURRENT.getPreferredName(), _deleteCurrent);
    }
    if (_deleteTimeInMillis != null) {
      builder.field(DELETE_TIME_IN_MILLIS.getPreferredName(), _deleteTimeInMillis);
    }
    if (_deleteTotal != null) {
      builder.field(DELETE_TOTAL.getPreferredName(), _deleteTotal);
    }
    if (_indexCurrent != null) {
      builder.field(INDEX_CURRENT.getPreferredName(), _indexCurrent);
    }
    if (_indexFailed != null) {
      builder.field(INDEX_FAILED.getPreferredName(), _indexFailed);
    }
    if (_indexTimeInMillis != null) {
      builder.field(INDEX_TIME_IN_MILLIS.getPreferredName(), _indexTimeInMillis);
    }
    if (_indexTotal != null) {
      builder.field(INDEX_TOTAL.getPreferredName(), _indexTotal);
    }
    if (_isThrottled != null) {
      builder.field(IS_THROTTLED.getPreferredName(), _isThrottled);
    }
    if (_noopUpdateTotal != null) {
      builder.field(NOOP_UPDATE_TOTAL.getPreferredName(), _noopUpdateTotal);
    }
    if (_throttleTimeInMillis != null) {
      builder.field(THROTTLE_TIME_IN_MILLIS.getPreferredName(), _throttleTimeInMillis);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ShardIndexing fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ShardIndexing.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ShardIndexing, Void> PARSER =
    new ObjectParser<>(ShardIndexing.class.getName(), false, ShardIndexing::new);

  static {
    PARSER.declareLong(ShardIndexing::setDeleteCurrent, DELETE_CURRENT);
    PARSER.declareLong(ShardIndexing::setDeleteTimeInMillis, DELETE_TIME_IN_MILLIS);
    PARSER.declareLong(ShardIndexing::setDeleteTotal, DELETE_TOTAL);
    PARSER.declareLong(ShardIndexing::setIndexCurrent, INDEX_CURRENT);
    PARSER.declareLong(ShardIndexing::setIndexFailed, INDEX_FAILED);
    PARSER.declareLong(ShardIndexing::setIndexTimeInMillis, INDEX_TIME_IN_MILLIS);
    PARSER.declareLong(ShardIndexing::setIndexTotal, INDEX_TOTAL);
    PARSER.declareBoolean(ShardIndexing::setIsThrottled, IS_THROTTLED);
    PARSER.declareLong(ShardIndexing::setNoopUpdateTotal, NOOP_UPDATE_TOTAL);
    PARSER.declareLong(ShardIndexing::setThrottleTimeInMillis, THROTTLE_TIME_IN_MILLIS);
  }

}
