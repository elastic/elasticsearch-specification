
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

public class AdaptiveSelectionStats  implements XContentable<AdaptiveSelectionStats> {
  
  static final ParseField AVG_QUEUE_SIZE = new ParseField("avg_queue_size");
  private long _avgQueueSize;
  private boolean _avgQueueSize$isSet;
  public long getAvgQueueSize() { return this._avgQueueSize; }
  public AdaptiveSelectionStats setAvgQueueSize(long val) {
    this._avgQueueSize = val;
    _avgQueueSize$isSet = true;
    return this;
  }

  static final ParseField AVG_RESPONSE_TIME = new ParseField("avg_response_time");
  private long _avgResponseTime;
  private boolean _avgResponseTime$isSet;
  public long getAvgResponseTime() { return this._avgResponseTime; }
  public AdaptiveSelectionStats setAvgResponseTime(long val) {
    this._avgResponseTime = val;
    _avgResponseTime$isSet = true;
    return this;
  }

  static final ParseField AVG_RESPONSE_TIME_NS = new ParseField("avg_response_time_ns");
  private long _avgResponseTimeNs;
  private boolean _avgResponseTimeNs$isSet;
  public long getAvgResponseTimeNs() { return this._avgResponseTimeNs; }
  public AdaptiveSelectionStats setAvgResponseTimeNs(long val) {
    this._avgResponseTimeNs = val;
    _avgResponseTimeNs$isSet = true;
    return this;
  }

  static final ParseField AVG_SERVICE_TIME = new ParseField("avg_service_time");
  private String _avgServiceTime;
  public String getAvgServiceTime() { return this._avgServiceTime; }
  public AdaptiveSelectionStats setAvgServiceTime(String val) { this._avgServiceTime = val; return this; }

  static final ParseField AVG_SERVICE_TIME_NS = new ParseField("avg_service_time_ns");
  private long _avgServiceTimeNs;
  private boolean _avgServiceTimeNs$isSet;
  public long getAvgServiceTimeNs() { return this._avgServiceTimeNs; }
  public AdaptiveSelectionStats setAvgServiceTimeNs(long val) {
    this._avgServiceTimeNs = val;
    _avgServiceTimeNs$isSet = true;
    return this;
  }

  static final ParseField OUTGOING_SEARCHES = new ParseField("outgoing_searches");
  private long _outgoingSearches;
  private boolean _outgoingSearches$isSet;
  public long getOutgoingSearches() { return this._outgoingSearches; }
  public AdaptiveSelectionStats setOutgoingSearches(long val) {
    this._outgoingSearches = val;
    _outgoingSearches$isSet = true;
    return this;
  }

  static final ParseField RANK = new ParseField("rank");
  private String _rank;
  public String getRank() { return this._rank; }
  public AdaptiveSelectionStats setRank(String val) { this._rank = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_avgQueueSize$isSet) {
      builder.field(AVG_QUEUE_SIZE.getPreferredName(), _avgQueueSize);
    }
    if (_avgResponseTime$isSet) {
      builder.field(AVG_RESPONSE_TIME.getPreferredName(), _avgResponseTime);
    }
    if (_avgResponseTimeNs$isSet) {
      builder.field(AVG_RESPONSE_TIME_NS.getPreferredName(), _avgResponseTimeNs);
    }
    if (_avgServiceTime != null) {
      builder.field(AVG_SERVICE_TIME.getPreferredName(), _avgServiceTime);
    }
    if (_avgServiceTimeNs$isSet) {
      builder.field(AVG_SERVICE_TIME_NS.getPreferredName(), _avgServiceTimeNs);
    }
    if (_outgoingSearches$isSet) {
      builder.field(OUTGOING_SEARCHES.getPreferredName(), _outgoingSearches);
    }
    if (_rank != null) {
      builder.field(RANK.getPreferredName(), _rank);
    }
  }

  @Override
  public AdaptiveSelectionStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return AdaptiveSelectionStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<AdaptiveSelectionStats, Void> PARSER =
    new ObjectParser<>(AdaptiveSelectionStats.class.getName(), false, AdaptiveSelectionStats::new);

  static {
    PARSER.declareLong(AdaptiveSelectionStats::setAvgQueueSize, AVG_QUEUE_SIZE);
    PARSER.declareLong(AdaptiveSelectionStats::setAvgResponseTime, AVG_RESPONSE_TIME);
    PARSER.declareLong(AdaptiveSelectionStats::setAvgResponseTimeNs, AVG_RESPONSE_TIME_NS);
    PARSER.declareString(AdaptiveSelectionStats::setAvgServiceTime, AVG_SERVICE_TIME);
    PARSER.declareLong(AdaptiveSelectionStats::setAvgServiceTimeNs, AVG_SERVICE_TIME_NS);
    PARSER.declareLong(AdaptiveSelectionStats::setOutgoingSearches, OUTGOING_SEARCHES);
    PARSER.declareString(AdaptiveSelectionStats::setRank, RANK);
  }

}
