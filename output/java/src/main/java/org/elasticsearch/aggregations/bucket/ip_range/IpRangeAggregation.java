
package org.elasticsearch.aggregations.bucket.ip_range;

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
import org.elasticsearch.aggregations.bucket.ip_range.*;

public class IpRangeAggregation  implements XContentable<IpRangeAggregation> {
  
  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public IpRangeAggregation setField(String val) { this._field = val; return this; }

  static final ParseField RANGES = new ParseField("ranges");
  private List<IpRangeAggregationRange> _ranges;
  public List<IpRangeAggregationRange> getRanges() { return this._ranges; }
  public IpRangeAggregation setRanges(List<IpRangeAggregationRange> val) { this._ranges = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_ranges != null) {
      builder.array(RANGES.getPreferredName(), _ranges);
    }
  }

  @Override
  public IpRangeAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IpRangeAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IpRangeAggregation, Void> PARSER =
    new ObjectParser<>(IpRangeAggregation.class.getName(), false, IpRangeAggregation::new);

  static {
    PARSER.declareString(IpRangeAggregation::setField, FIELD);
    PARSER.declareObjectArray(IpRangeAggregation::setRanges, (p, t) -> IpRangeAggregationRange.PARSER.apply(p, t), RANGES);
  }

}
