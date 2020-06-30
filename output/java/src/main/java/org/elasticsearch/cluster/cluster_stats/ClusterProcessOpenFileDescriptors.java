
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

public class ClusterProcessOpenFileDescriptors  implements XContentable<ClusterProcessOpenFileDescriptors> {
  
  static final ParseField AVG = new ParseField("avg");
  private Long _avg;
  public Long getAvg() { return this._avg; }
  public ClusterProcessOpenFileDescriptors setAvg(Long val) { this._avg = val; return this; }


  static final ParseField MAX = new ParseField("max");
  private Long _max;
  public Long getMax() { return this._max; }
  public ClusterProcessOpenFileDescriptors setMax(Long val) { this._max = val; return this; }


  static final ParseField MIN = new ParseField("min");
  private Long _min;
  public Long getMin() { return this._min; }
  public ClusterProcessOpenFileDescriptors setMin(Long val) { this._min = val; return this; }


  
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
  public ClusterProcessOpenFileDescriptors fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ClusterProcessOpenFileDescriptors.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ClusterProcessOpenFileDescriptors, Void> PARSER =
    new ObjectParser<>(ClusterProcessOpenFileDescriptors.class.getName(), false, ClusterProcessOpenFileDescriptors::new);

  static {
    PARSER.declareLong(ClusterProcessOpenFileDescriptors::setAvg, AVG);
    PARSER.declareLong(ClusterProcessOpenFileDescriptors::setMax, MAX);
    PARSER.declareLong(ClusterProcessOpenFileDescriptors::setMin, MIN);
  }

}
