
package org.elasticsearch.cluster.cluster_stats;

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

public class ClusterShardMetrics  implements XContentable<ClusterShardMetrics> {
  
  static final ParseField AVG = new ParseField("avg");
  private Double _avg;
  public Double getAvg() { return this._avg; }
  public ClusterShardMetrics setAvg(Double val) { this._avg = val; return this; }


  static final ParseField MAX = new ParseField("max");
  private Double _max;
  public Double getMax() { return this._max; }
  public ClusterShardMetrics setMax(Double val) { this._max = val; return this; }


  static final ParseField MIN = new ParseField("min");
  private Double _min;
  public Double getMin() { return this._min; }
  public ClusterShardMetrics setMin(Double val) { this._min = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_avg != null) {
      builder.field(AVG.getPreferredName(), _avg);
    }
    if (_max != null) {
      builder.field(MAX.getPreferredName(), _max);
    }
    if (_min != null) {
      builder.field(MIN.getPreferredName(), _min);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ClusterShardMetrics fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ClusterShardMetrics.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ClusterShardMetrics, Void> PARSER =
    new ObjectParser<>(ClusterShardMetrics.class.getName(), false, ClusterShardMetrics::new);

  static {
    PARSER.declareDouble(ClusterShardMetrics::setAvg, AVG);
    PARSER.declareDouble(ClusterShardMetrics::setMax, MAX);
    PARSER.declareDouble(ClusterShardMetrics::setMin, MIN);
  }

}
