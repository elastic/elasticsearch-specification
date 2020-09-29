
package org.elasticsearch.cluster.cluster_stats;

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

public class ClusterShardMetrics  implements XContentable<ClusterShardMetrics> {
  
  static final ParseField AVG = new ParseField("avg");
  private double _avg;
  private boolean _avg$isSet;
  public double getAvg() { return this._avg; }
  public ClusterShardMetrics setAvg(double val) {
    this._avg = val;
    _avg$isSet = true;
    return this;
  }

  static final ParseField MAX = new ParseField("max");
  private double _max;
  private boolean _max$isSet;
  public double getMax() { return this._max; }
  public ClusterShardMetrics setMax(double val) {
    this._max = val;
    _max$isSet = true;
    return this;
  }

  static final ParseField MIN = new ParseField("min");
  private double _min;
  private boolean _min$isSet;
  public double getMin() { return this._min; }
  public ClusterShardMetrics setMin(double val) {
    this._min = val;
    _min$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_avg$isSet) {
      builder.field(AVG.getPreferredName(), _avg);
    }
    if (_max$isSet) {
      builder.field(MAX.getPreferredName(), _max);
    }
    if (_min$isSet) {
      builder.field(MIN.getPreferredName(), _min);
    }
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
