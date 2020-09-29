
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

public class LoadAverageStats  implements XContentable<LoadAverageStats> {
  
  static final ParseField AVERAGE15M = new ParseField("15m");
  private float _average15m;
  private boolean _average15m$isSet;
  public float getAverage15m() { return this._average15m; }
  public LoadAverageStats setAverage15m(float val) {
    this._average15m = val;
    _average15m$isSet = true;
    return this;
  }

  static final ParseField AVERAGE5M = new ParseField("5m");
  private float _average5m;
  private boolean _average5m$isSet;
  public float getAverage5m() { return this._average5m; }
  public LoadAverageStats setAverage5m(float val) {
    this._average5m = val;
    _average5m$isSet = true;
    return this;
  }

  static final ParseField AVERAGE1M = new ParseField("1m");
  private float _average1m;
  private boolean _average1m$isSet;
  public float getAverage1m() { return this._average1m; }
  public LoadAverageStats setAverage1m(float val) {
    this._average1m = val;
    _average1m$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_average15m$isSet) {
      builder.field(AVERAGE15M.getPreferredName(), _average15m);
    }
    if (_average5m$isSet) {
      builder.field(AVERAGE5M.getPreferredName(), _average5m);
    }
    if (_average1m$isSet) {
      builder.field(AVERAGE1M.getPreferredName(), _average1m);
    }
  }

  @Override
  public LoadAverageStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return LoadAverageStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<LoadAverageStats, Void> PARSER =
    new ObjectParser<>(LoadAverageStats.class.getName(), false, LoadAverageStats::new);

  static {
    PARSER.declareFloat(LoadAverageStats::setAverage15m, AVERAGE15M);
    PARSER.declareFloat(LoadAverageStats::setAverage5m, AVERAGE5M);
    PARSER.declareFloat(LoadAverageStats::setAverage1m, AVERAGE1M);
  }

}
