
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
import org.elasticsearch.common_options.stats.*;

public class IndexingStats  implements XContentable<IndexingStats> {
  
  static final ParseField INDEX_CURRENT = new ParseField("index_current");
  private Long _indexCurrent;
  public Long getIndexCurrent() { return this._indexCurrent; }
  public IndexingStats setIndexCurrent(Long val) { this._indexCurrent = val; return this; }


  static final ParseField DELETE_CURRENT = new ParseField("delete_current");
  private Long _deleteCurrent;
  public Long getDeleteCurrent() { return this._deleteCurrent; }
  public IndexingStats setDeleteCurrent(Long val) { this._deleteCurrent = val; return this; }


  static final ParseField DELETE_TIME = new ParseField("delete_time");
  private String _deleteTime;
  public String getDeleteTime() { return this._deleteTime; }
  public IndexingStats setDeleteTime(String val) { this._deleteTime = val; return this; }


  static final ParseField DELETE_TIME_IN_MILLIS = new ParseField("delete_time_in_millis");
  private Long _deleteTimeInMillis;
  public Long getDeleteTimeInMillis() { return this._deleteTimeInMillis; }
  public IndexingStats setDeleteTimeInMillis(Long val) { this._deleteTimeInMillis = val; return this; }


  static final ParseField DELETE_TOTAL = new ParseField("delete_total");
  private Long _deleteTotal;
  public Long getDeleteTotal() { return this._deleteTotal; }
  public IndexingStats setDeleteTotal(Long val) { this._deleteTotal = val; return this; }


  static final ParseField IS_THROTTLED = new ParseField("is_throttled");
  private Boolean _isThrottled;
  public Boolean getIsThrottled() { return this._isThrottled; }
  public IndexingStats setIsThrottled(Boolean val) { this._isThrottled = val; return this; }


  static final ParseField NOOP_UPDATE_TOTAL = new ParseField("noop_update_total");
  private Long _noopUpdateTotal;
  public Long getNoopUpdateTotal() { return this._noopUpdateTotal; }
  public IndexingStats setNoopUpdateTotal(Long val) { this._noopUpdateTotal = val; return this; }


  static final ParseField THROTTLE_TIME = new ParseField("throttle_time");
  private String _throttleTime;
  public String getThrottleTime() { return this._throttleTime; }
  public IndexingStats setThrottleTime(String val) { this._throttleTime = val; return this; }


  static final ParseField THROTTLE_TIME_IN_MILLIS = new ParseField("throttle_time_in_millis");
  private Long _throttleTimeInMillis;
  public Long getThrottleTimeInMillis() { return this._throttleTimeInMillis; }
  public IndexingStats setThrottleTimeInMillis(Long val) { this._throttleTimeInMillis = val; return this; }


  static final ParseField INDEX_TIME = new ParseField("index_time");
  private String _indexTime;
  public String getIndexTime() { return this._indexTime; }
  public IndexingStats setIndexTime(String val) { this._indexTime = val; return this; }


  static final ParseField INDEX_TIME_IN_MILLIS = new ParseField("index_time_in_millis");
  private Long _indexTimeInMillis;
  public Long getIndexTimeInMillis() { return this._indexTimeInMillis; }
  public IndexingStats setIndexTimeInMillis(Long val) { this._indexTimeInMillis = val; return this; }


  static final ParseField INDEX_TOTAL = new ParseField("index_total");
  private Long _indexTotal;
  public Long getIndexTotal() { return this._indexTotal; }
  public IndexingStats setIndexTotal(Long val) { this._indexTotal = val; return this; }


  static final ParseField TYPES = new ParseField("types");
  private NamedContainer<String, IndexingStats> _types;
  public NamedContainer<String, IndexingStats> getTypes() { return this._types; }
  public IndexingStats setTypes(NamedContainer<String, IndexingStats> val) { this._types = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_indexCurrent != null) {
      builder.field(INDEX_CURRENT.getPreferredName(), _indexCurrent);
    }
    if (_deleteCurrent != null) {
      builder.field(DELETE_CURRENT.getPreferredName(), _deleteCurrent);
    }
    if (_deleteTime != null) {
      builder.field(DELETE_TIME.getPreferredName(), _deleteTime);
    }
    if (_deleteTimeInMillis != null) {
      builder.field(DELETE_TIME_IN_MILLIS.getPreferredName(), _deleteTimeInMillis);
    }
    if (_deleteTotal != null) {
      builder.field(DELETE_TOTAL.getPreferredName(), _deleteTotal);
    }
    if (_isThrottled != null) {
      builder.field(IS_THROTTLED.getPreferredName(), _isThrottled);
    }
    if (_noopUpdateTotal != null) {
      builder.field(NOOP_UPDATE_TOTAL.getPreferredName(), _noopUpdateTotal);
    }
    if (_throttleTime != null) {
      builder.field(THROTTLE_TIME.getPreferredName(), _throttleTime);
    }
    if (_throttleTimeInMillis != null) {
      builder.field(THROTTLE_TIME_IN_MILLIS.getPreferredName(), _throttleTimeInMillis);
    }
    if (_indexTime != null) {
      builder.field(INDEX_TIME.getPreferredName(), _indexTime);
    }
    if (_indexTimeInMillis != null) {
      builder.field(INDEX_TIME_IN_MILLIS.getPreferredName(), _indexTimeInMillis);
    }
    if (_indexTotal != null) {
      builder.field(INDEX_TOTAL.getPreferredName(), _indexTotal);
    }
    if (_types != null) {
      builder.field(TYPES.getPreferredName());
      _types.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public IndexingStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IndexingStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IndexingStats, Void> PARSER =
    new ObjectParser<>(IndexingStats.class.getName(), false, IndexingStats::new);

  static {
    PARSER.declareLong(IndexingStats::setIndexCurrent, INDEX_CURRENT);
    PARSER.declareLong(IndexingStats::setDeleteCurrent, DELETE_CURRENT);
    PARSER.declareString(IndexingStats::setDeleteTime, DELETE_TIME);
    PARSER.declareLong(IndexingStats::setDeleteTimeInMillis, DELETE_TIME_IN_MILLIS);
    PARSER.declareLong(IndexingStats::setDeleteTotal, DELETE_TOTAL);
    PARSER.declareBoolean(IndexingStats::setIsThrottled, IS_THROTTLED);
    PARSER.declareLong(IndexingStats::setNoopUpdateTotal, NOOP_UPDATE_TOTAL);
    PARSER.declareString(IndexingStats::setThrottleTime, THROTTLE_TIME);
    PARSER.declareLong(IndexingStats::setThrottleTimeInMillis, THROTTLE_TIME_IN_MILLIS);
    PARSER.declareString(IndexingStats::setIndexTime, INDEX_TIME);
    PARSER.declareLong(IndexingStats::setIndexTimeInMillis, INDEX_TIME_IN_MILLIS);
    PARSER.declareLong(IndexingStats::setIndexTotal, INDEX_TOTAL);
    PARSER.declareObject(IndexingStats::setTypes, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> IndexingStats.PARSER.apply(pp, null)), TYPES);
  }

}
