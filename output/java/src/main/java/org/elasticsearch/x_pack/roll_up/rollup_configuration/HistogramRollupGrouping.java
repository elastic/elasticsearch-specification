
package org.elasticsearch.x_pack.roll_up.rollup_configuration;

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

public class HistogramRollupGrouping  implements XContentable<HistogramRollupGrouping> {
  
  static final ParseField FIELDS = new ParseField("fields");
  private List<String> _fields;
  public List<String> getFields() { return this._fields; }
  public HistogramRollupGrouping setFields(List<String> val) { this._fields = val; return this; }

  static final ParseField INTERVAL = new ParseField("interval");
  private long _interval;
  private boolean _interval$isSet;
  public long getInterval() { return this._interval; }
  public HistogramRollupGrouping setInterval(long val) {
    this._interval = val;
    _interval$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_fields != null) {
      builder.array(FIELDS.getPreferredName(), _fields);
    }
    if (_interval$isSet) {
      builder.field(INTERVAL.getPreferredName(), _interval);
    }
  }

  @Override
  public HistogramRollupGrouping fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return HistogramRollupGrouping.PARSER.apply(parser, null);
  }

  public static final ObjectParser<HistogramRollupGrouping, Void> PARSER =
    new ObjectParser<>(HistogramRollupGrouping.class.getName(), false, HistogramRollupGrouping::new);

  static {
    PARSER.declareStringArray(HistogramRollupGrouping::setFields, FIELDS);
    PARSER.declareLong(HistogramRollupGrouping::setInterval, INTERVAL);
  }

}
