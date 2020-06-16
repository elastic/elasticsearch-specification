
package org.elasticsearch.aggregations.metric.percentile_ranks;

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
import org.elasticsearch.aggregations.metric.percentiles.methods.*;
import org.elasticsearch.internal.*;

public class PercentileRanksAggregation  implements XContentable<PercentileRanksAggregation> {
  
  static final ParseField METHOD = new ParseField("method");
  private PercentilesMethod _method;
  public PercentilesMethod getMethod() { return this._method; }
  public PercentileRanksAggregation setMethod(PercentilesMethod val) { this._method = val; return this; }


  static final ParseField VALUES = new ParseField("values");
  private List<Double> _values;
  public List<Double> getValues() { return this._values; }
  public PercentileRanksAggregation setValues(List<Double> val) { this._values = val; return this; }


  static final ParseField KEYED = new ParseField("keyed");
  private Boolean _keyed;
  public Boolean getKeyed() { return this._keyed; }
  public PercentileRanksAggregation setKeyed(Boolean val) { this._keyed = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_method != null) {
      builder.field(METHOD.getPreferredName());
      _method.toXContent(builder, params);
    }
    if (_values != null) {
      builder.array(VALUES.getPreferredName(), _values);
    }
    if (_keyed != null) {
      builder.field(KEYED.getPreferredName(), _keyed);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public PercentileRanksAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PercentileRanksAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PercentileRanksAggregation, Void> PARSER =
    new ObjectParser<>(PercentileRanksAggregation.class.getName(), false, PercentileRanksAggregation::new);

  static {
    PARSER.declareObject(PercentileRanksAggregation::setMethod, (p, t) -> PercentilesMethod.PARSER.apply(p, t), METHOD);
    PARSER.declareDoubleArray(PercentileRanksAggregation::setValues, VALUES);
    PARSER.declareBoolean(PercentileRanksAggregation::setKeyed, KEYED);
  }

}
