
package org.elasticsearch.aggregations.metric.extended_stats;

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
import org.elasticsearch.internal.*;

public class ExtendedStatsAggregation  implements XContentable<ExtendedStatsAggregation> {
  
  static final ParseField SIGMA = new ParseField("sigma");
  private Double _sigma;
  public Double getSigma() { return this._sigma; }
  public ExtendedStatsAggregation setSigma(Double val) { this._sigma = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_sigma != null) {
      builder.field(SIGMA.getPreferredName(), _sigma);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ExtendedStatsAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ExtendedStatsAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ExtendedStatsAggregation, Void> PARSER =
    new ObjectParser<>(ExtendedStatsAggregation.class.getName(), false, ExtendedStatsAggregation::new);

  static {
    PARSER.declareDouble(ExtendedStatsAggregation::setSigma, SIGMA);
  }

}
