
package org.elasticsearch.aggregations.bucket.range;

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
import org.elasticsearch.common_abstractions.infer.field.*;
import org.elasticsearch.common_options.range.*;
import org.elasticsearch.common_options.scripting.*;

public class RangeAggregation  implements XContentable<RangeAggregation> {
  
  static final ParseField FIELD = new ParseField("field");
  private Field _field;
  public Field getField() { return this._field; }
  public RangeAggregation setField(Field val) { this._field = val; return this; }


  static final ParseField RANGES = new ParseField("ranges");
  private List<AggregationRange> _ranges;
  public List<AggregationRange> getRanges() { return this._ranges; }
  public RangeAggregation setRanges(List<AggregationRange> val) { this._ranges = val; return this; }


  static final ParseField SCRIPT = new ParseField("script");
  private Script _script;
  public Script getScript() { return this._script; }
  public RangeAggregation setScript(Script val) { this._script = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_field != null) {
      builder.field(FIELD.getPreferredName());
      _field.toXContent(builder, params);
    }
    if (_ranges != null) {
      builder.array(RANGES.getPreferredName(), _ranges);
    }
    if (_script != null) {
      builder.field(SCRIPT.getPreferredName());
      _script.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public RangeAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RangeAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RangeAggregation, Void> PARSER =
    new ObjectParser<>(RangeAggregation.class.getName(), false, RangeAggregation::new);

  static {
    PARSER.declareObject(RangeAggregation::setField, (p, t) -> Field.createFrom(p), FIELD);
    PARSER.declareObjectArray(RangeAggregation::setRanges, (p, t) -> AggregationRange.PARSER.apply(p, t), RANGES);
    PARSER.declareObject(RangeAggregation::setScript, (p, t) -> Script.PARSER.apply(p, t), SCRIPT);
  }

}
