
package org.elasticsearch.aggregations.metric.weighted_average;

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

public class WeightedAverageValue  implements XContentable<WeightedAverageValue> {
  
  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public WeightedAverageValue setField(String val) { this._field = val; return this; }

  static final ParseField MISSING = new ParseField("missing");
  private double _missing;
  private boolean _missing$isSet;
  public double getMissing() { return this._missing; }
  public WeightedAverageValue setMissing(double val) {
    this._missing = val;
    _missing$isSet = true;
    return this;
  }

  static final ParseField SCRIPT = new ParseField("script");
  private Script _script;
  public Script getScript() { return this._script; }
  public WeightedAverageValue setScript(Script val) { this._script = val; return this; }


  
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
  public WeightedAverageValue fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return WeightedAverageValue.PARSER.apply(parser, null);
  }

  public static final ObjectParser<WeightedAverageValue, Void> PARSER =
    new ObjectParser<>(WeightedAverageValue.class.getName(), false, WeightedAverageValue::new);

  static {
    PARSER.declareString(WeightedAverageValue::setField, FIELD);
    PARSER.declareDouble(WeightedAverageValue::setMissing, MISSING);
    PARSER.declareObject(WeightedAverageValue::setScript, (p, t) -> Script.PARSER.apply(p, t), SCRIPT);
  }

}
