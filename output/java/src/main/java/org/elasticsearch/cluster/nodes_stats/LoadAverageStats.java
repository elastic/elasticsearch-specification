
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

public class LoadAverageStats  implements XContentable<LoadAverageStats> {
  
  static final ParseField AVERAGE15M = new ParseField("15m");
  private Float _average15m;
  public Float getAverage15m() { return this._average15m; }
  public LoadAverageStats setAverage15m(Float val) { this._average15m = val; return this; }


  static final ParseField AVERAGE5M = new ParseField("5m");
  private Float _average5m;
  public Float getAverage5m() { return this._average5m; }
  public LoadAverageStats setAverage5m(Float val) { this._average5m = val; return this; }


  static final ParseField AVERAGE1M = new ParseField("1m");
  private Float _average1m;
  public Float getAverage1m() { return this._average1m; }
  public LoadAverageStats setAverage1m(Float val) { this._average1m = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_average15m != null) {
      builder.field(AVERAGE15M.getPreferredName(), _average15m);
    }
    if (_average5m != null) {
      builder.field(AVERAGE5M.getPreferredName(), _average5m);
    }
    if (_average1m != null) {
      builder.field(AVERAGE1M.getPreferredName(), _average1m);
    }
    builder.endObject();
    return builder;
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
