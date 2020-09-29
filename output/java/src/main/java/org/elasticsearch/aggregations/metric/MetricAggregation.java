
package org.elasticsearch.aggregations.metric;

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
import org.elasticsearch.common_options.scripting.*;

public class MetricAggregation  implements XContentable<MetricAggregation> {
  
  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public MetricAggregation setField(String val) { this._field = val; return this; }

  static final ParseField MISSING = new ParseField("missing");
  private double _missing;
  private boolean _missing$isSet;
  public double getMissing() { return this._missing; }
  public MetricAggregation setMissing(double val) {
    this._missing = val;
    _missing$isSet = true;
    return this;
  }

  static final ParseField SCRIPT = new ParseField("script");
  private Script _script;
  public Script getScript() { return this._script; }
  public MetricAggregation setScript(Script val) { this._script = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_missing$isSet) {
      builder.field(MISSING.getPreferredName(), _missing);
    }
    if (_script != null) {
      builder.field(SCRIPT.getPreferredName());
      _script.toXContent(builder, params);
    }
  }

  @Override
  public MetricAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return MetricAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<MetricAggregation, Void> PARSER =
    new ObjectParser<>(MetricAggregation.class.getName(), false, MetricAggregation::new);

  static {
    PARSER.declareString(MetricAggregation::setField, FIELD);
    PARSER.declareDouble(MetricAggregation::setMissing, MISSING);
    PARSER.declareObject(MetricAggregation::setScript, (p, t) -> Script.PARSER.apply(p, t), SCRIPT);
  }

}
