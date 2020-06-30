
package org.elasticsearch.cluster.nodes_stats.statistics;

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
import org.elasticsearch.cluster.nodes_stats.*;

public class KeyedProcessorStats  implements XContentable<KeyedProcessorStats> {
  
  static final ParseField TYPE = new ParseField("type");
  private String _type;
  public String getType() { return this._type; }
  public KeyedProcessorStats setType(String val) { this._type = val; return this; }


  static final ParseField STATISTICS = new ParseField("statistics");
  private ProcessStats _statistics;
  public ProcessStats getStatistics() { return this._statistics; }
  public KeyedProcessorStats setStatistics(ProcessStats val) { this._statistics = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_type != null) {
      builder.field(TYPE.getPreferredName(), _type);
    }
    if (_statistics != null) {
      builder.field(STATISTICS.getPreferredName());
      _statistics.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public KeyedProcessorStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return KeyedProcessorStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<KeyedProcessorStats, Void> PARSER =
    new ObjectParser<>(KeyedProcessorStats.class.getName(), false, KeyedProcessorStats::new);

  static {
    PARSER.declareString(KeyedProcessorStats::setType, TYPE);
    PARSER.declareObject(KeyedProcessorStats::setStatistics, (p, t) -> ProcessStats.PARSER.apply(p, t), STATISTICS);
  }

}
