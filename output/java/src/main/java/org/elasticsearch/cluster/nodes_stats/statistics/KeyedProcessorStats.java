
package org.elasticsearch.cluster.nodes_stats.statistics;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.cluster.nodes_stats.*;

public class KeyedProcessorStats  implements XContentable<KeyedProcessorStats> {
  
  static final ParseField STATISTICS = new ParseField("statistics");
  private ProcessStats _statistics;
  public ProcessStats getStatistics() { return this._statistics; }
  public KeyedProcessorStats setStatistics(ProcessStats val) { this._statistics = val; return this; }

  static final ParseField TYPE = new ParseField("type");
  private String _type;
  public String getType() { return this._type; }
  public KeyedProcessorStats setType(String val) { this._type = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_statistics != null) {
      builder.field(STATISTICS.getPreferredName());
      _statistics.toXContent(builder, params);
    }
    if (_type != null) {
      builder.field(TYPE.getPreferredName(), _type);
    }
  }

  @Override
  public KeyedProcessorStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return KeyedProcessorStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<KeyedProcessorStats, Void> PARSER =
    new ObjectParser<>(KeyedProcessorStats.class.getName(), false, KeyedProcessorStats::new);

  static {
    PARSER.declareObject(KeyedProcessorStats::setStatistics, (p, t) -> ProcessStats.PARSER.apply(p, t), STATISTICS);
    PARSER.declareString(KeyedProcessorStats::setType, TYPE);
  }

}
