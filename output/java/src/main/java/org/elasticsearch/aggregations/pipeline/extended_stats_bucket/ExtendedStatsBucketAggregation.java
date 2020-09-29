
package org.elasticsearch.aggregations.pipeline.extended_stats_bucket;

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

public class ExtendedStatsBucketAggregation  implements XContentable<ExtendedStatsBucketAggregation> {
  
  static final ParseField SIGMA = new ParseField("sigma");
  private double _sigma;
  private boolean _sigma$isSet;
  public double getSigma() { return this._sigma; }
  public ExtendedStatsBucketAggregation setSigma(double val) {
    this._sigma = val;
    _sigma$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_sigma$isSet) {
      builder.field(SIGMA.getPreferredName(), _sigma);
    }
  }

  @Override
  public ExtendedStatsBucketAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ExtendedStatsBucketAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ExtendedStatsBucketAggregation, Void> PARSER =
    new ObjectParser<>(ExtendedStatsBucketAggregation.class.getName(), false, ExtendedStatsBucketAggregation::new);

  static {
    PARSER.declareDouble(ExtendedStatsBucketAggregation::setSigma, SIGMA);
  }

}
