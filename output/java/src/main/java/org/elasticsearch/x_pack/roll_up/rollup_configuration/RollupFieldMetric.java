
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
import org.elasticsearch.x_pack.roll_up.rollup_configuration.*;

public class RollupFieldMetric  implements XContentable<RollupFieldMetric> {
  
  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public RollupFieldMetric setField(String val) { this._field = val; return this; }

  static final ParseField METRICS = new ParseField("metrics");
  private List<RollupMetric> _metrics;
  public List<RollupMetric> getMetrics() { return this._metrics; }
  public RollupFieldMetric setMetrics(List<RollupMetric> val) { this._metrics = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_metrics != null) {
      builder.array(METRICS.getPreferredName(), _metrics);
    }
  }

  @Override
  public RollupFieldMetric fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RollupFieldMetric.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RollupFieldMetric, Void> PARSER =
    new ObjectParser<>(RollupFieldMetric.class.getName(), false, RollupFieldMetric::new);

  static {
    PARSER.declareString(RollupFieldMetric::setField, FIELD);
    PARSER.declareFieldArray(RollupFieldMetric::setMetrics, (p, t) -> RollupMetric.PARSER.apply(p), METRICS, ObjectParser.ValueType.STRING_ARRAY);
  }

}
