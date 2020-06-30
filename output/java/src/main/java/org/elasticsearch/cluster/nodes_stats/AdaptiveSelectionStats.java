
package org.elasticsearch.cluster.nodes_stats;

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

public class AdaptiveSelectionStats  implements XContentable<AdaptiveSelectionStats> {
  
  static final ParseField AVG_QUEUE_SIZE = new ParseField("avg_queue_size");
  private Long _avgQueueSize;
  public Long getAvgQueueSize() { return this._avgQueueSize; }
  public AdaptiveSelectionStats setAvgQueueSize(Long val) { this._avgQueueSize = val; return this; }


  static final ParseField AVG_RESPONSE_TIME = new ParseField("avg_response_time");
  private Long _avgResponseTime;
  public Long getAvgResponseTime() { return this._avgResponseTime; }
  public AdaptiveSelectionStats setAvgResponseTime(Long val) { this._avgResponseTime = val; return this; }


  static final ParseField AVG_RESPONSE_TIME_NS = new ParseField("avg_response_time_ns");
  private Long _avgResponseTimeNs;
  public Long getAvgResponseTimeNs() { return this._avgResponseTimeNs; }
  public AdaptiveSelectionStats setAvgResponseTimeNs(Long val) { this._avgResponseTimeNs = val; return this; }


  static final ParseField AVG_SERVICE_TIME = new ParseField("avg_service_time");
  private String _avgServiceTime;
  public String getAvgServiceTime() { return this._avgServiceTime; }
  public AdaptiveSelectionStats setAvgServiceTime(String val) { this._avgServiceTime = val; return this; }


  static final ParseField AVG_SERVICE_TIME_NS = new ParseField("avg_service_time_ns");
  private Long _avgServiceTimeNs;
  public Long getAvgServiceTimeNs() { return this._avgServiceTimeNs; }
  public AdaptiveSelectionStats setAvgServiceTimeNs(Long val) { this._avgServiceTimeNs = val; return this; }


  static final ParseField OUTGOING_SEARCHES = new ParseField("outgoing_searches");
  private Long _outgoingSearches;
  public Long getOutgoingSearches() { return this._outgoingSearches; }
  public AdaptiveSelectionStats setOutgoingSearches(Long val) { this._outgoingSearches = val; return this; }


  static final ParseField RANK = new ParseField("rank");
  private String _rank;
  public String getRank() { return this._rank; }
  public AdaptiveSelectionStats setRank(String val) { this._rank = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_avgQueueSize != null) {
      builder.field(AVG_QUEUE_SIZE.getPreferredName(), _avgQueueSize);
    }
    if (_avgResponseTime != null) {
      builder.field(AVG_RESPONSE_TIME.getPreferredName(), _avgResponseTime);
    }
    if (_avgResponseTimeNs != null) {
      builder.field(AVG_RESPONSE_TIME_NS.getPreferredName(), _avgResponseTimeNs);
    }
    if (_avgServiceTime != null) {
      builder.field(AVG_SERVICE_TIME.getPreferredName(), _avgServiceTime);
    }
    if (_avgServiceTimeNs != null) {
      builder.field(AVG_SERVICE_TIME_NS.getPreferredName(), _avgServiceTimeNs);
    }
    if (_outgoingSearches != null) {
      builder.field(OUTGOING_SEARCHES.getPreferredName(), _outgoingSearches);
    }
    if (_rank != null) {
      builder.field(RANK.getPreferredName(), _rank);
    }
    builder.endObject();
    return builder;
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
