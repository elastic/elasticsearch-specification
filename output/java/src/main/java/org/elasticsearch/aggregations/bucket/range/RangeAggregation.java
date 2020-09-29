
package org.elasticsearch.aggregations.bucket.range;

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
import org.elasticsearch.common_options.range.*;
import org.elasticsearch.common_options.scripting.*;

public class RangeAggregation  implements XContentable<RangeAggregation> {
  
  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public RangeAggregation setField(String val) { this._field = val; return this; }

  static final ParseField RANGES = new ParseField("ranges");
  private List<AggregationRange> _ranges;
  public List<AggregationRange> getRanges() { return this._ranges; }
  public RangeAggregation setRanges(List<AggregationRange> val) { this._ranges = val; return this; }

  static final ParseField SCRIPT = new ParseField("script");
  private Script _script;
  public Script getScript() { return this._script; }
  public RangeAggregation setScript(Script val) { this._script = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_ranges != null) {
      builder.array(RANGES.getPreferredName(), _ranges);
    }
    if (_script != null) {
      builder.field(SCRIPT.getPreferredName());
      _script.toXContent(builder, params);
    }
  }

  @Override
  public RangeAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RangeAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RangeAggregation, Void> PARSER =
    new ObjectParser<>(RangeAggregation.class.getName(), false, RangeAggregation::new);

  static {
    PARSER.declareString(RangeAggregation::setField, FIELD);
    PARSER.declareObjectArray(RangeAggregation::setRanges, (p, t) -> AggregationRange.PARSER.apply(p, t), RANGES);
    PARSER.declareObject(RangeAggregation::setScript, (p, t) -> Script.PARSER.apply(p, t), SCRIPT);
  }

}
