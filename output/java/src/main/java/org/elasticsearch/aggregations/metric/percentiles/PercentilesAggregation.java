
package org.elasticsearch.aggregations.metric.percentiles;

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

public class PercentilesAggregation  implements XContentable<PercentilesAggregation> {
  
  static final ParseField METHOD = new ParseField("method");
  private PercentilesMethod _method;
  public PercentilesMethod getMethod() { return this._method; }
  public PercentilesAggregation setMethod(PercentilesMethod val) { this._method = val; return this; }


  static final ParseField PERCENTS = new ParseField("percents");
  private List<Double> _percents;
  public List<Double> getPercents() { return this._percents; }
  public PercentilesAggregation setPercents(List<Double> val) { this._percents = val; return this; }


  static final ParseField KEYED = new ParseField("keyed");
  private Boolean _keyed;
  public Boolean getKeyed() { return this._keyed; }
  public PercentilesAggregation setKeyed(Boolean val) { this._keyed = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_method != null) {
      builder.field(METHOD.getPreferredName());
      _method.toXContent(builder, params);
    }
    if (_percents != null) {
      builder.array(PERCENTS.getPreferredName(), _percents);
    }
    if (_keyed != null) {
      builder.field(KEYED.getPreferredName(), _keyed);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public PercentilesAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PercentilesAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PercentilesAggregation, Void> PARSER =
    new ObjectParser<>(PercentilesAggregation.class.getName(), false, PercentilesAggregation::new);

  static {
    PARSER.declareObject(PercentilesAggregation::setMethod, (p, t) -> PercentilesMethod.PARSER.apply(p, t), METHOD);
    PARSER.declareDoubleArray(PercentilesAggregation::setPercents, PERCENTS);
    PARSER.declareBoolean(PercentilesAggregation::setKeyed, KEYED);
  }

}
