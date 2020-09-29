
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

public class ClusterProcessOpenFileDescriptors  implements XContentable<ClusterProcessOpenFileDescriptors> {
  
  static final ParseField AVG = new ParseField("avg");
  private long _avg;
  private boolean _avg$isSet;
  public long getAvg() { return this._avg; }
  public ClusterProcessOpenFileDescriptors setAvg(long val) {
    this._avg = val;
    _avg$isSet = true;
    return this;
  }

  static final ParseField MAX = new ParseField("max");
  private long _max;
  private boolean _max$isSet;
  public long getMax() { return this._max; }
  public ClusterProcessOpenFileDescriptors setMax(long val) {
    this._max = val;
    _max$isSet = true;
    return this;
  }

  static final ParseField MIN = new ParseField("min");
  private long _min;
  private boolean _min$isSet;
  public long getMin() { return this._min; }
  public ClusterProcessOpenFileDescriptors setMin(long val) {
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
