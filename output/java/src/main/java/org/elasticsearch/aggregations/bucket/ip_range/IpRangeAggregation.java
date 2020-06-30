
package org.elasticsearch.aggregations.bucket.ip_range;

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
import org.elasticsearch.aggregations.bucket.ip_range.*;

public class IpRangeAggregation  implements XContentable<IpRangeAggregation> {
  
  static final ParseField FIELD = new ParseField("field");
  private Field _field;
  public Field getField() { return this._field; }
  public IpRangeAggregation setField(Field val) { this._field = val; return this; }


  static final ParseField RANGES = new ParseField("ranges");
  private List<IpRangeAggregationRange> _ranges;
  public List<IpRangeAggregationRange> getRanges() { return this._ranges; }
  public IpRangeAggregation setRanges(List<IpRangeAggregationRange> val) { this._ranges = val; return this; }


  
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
    builder.endObject();
    return builder;
  }

  @Override
  public IpRangeAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IpRangeAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IpRangeAggregation, Void> PARSER =
    new ObjectParser<>(IpRangeAggregation.class.getName(), false, IpRangeAggregation::new);

  static {
    PARSER.declareObject(IpRangeAggregation::setField, (p, t) -> Field.createFrom(p), FIELD);
    PARSER.declareObjectArray(IpRangeAggregation::setRanges, (p, t) -> IpRangeAggregationRange.PARSER.apply(p, t), RANGES);
  }

}
