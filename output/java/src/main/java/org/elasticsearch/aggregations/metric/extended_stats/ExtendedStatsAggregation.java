
package org.elasticsearch.aggregations.metric.extended_stats;

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

public class ExtendedStatsAggregation  implements XContentable<ExtendedStatsAggregation> {
  
  static final ParseField SIGMA = new ParseField("sigma");
  private double _sigma;
  private boolean _sigma$isSet;
  public double getSigma() { return this._sigma; }
  public ExtendedStatsAggregation setSigma(double val) {
    this._sigma = val;
    _sigma$isSet = true;
    return this;
  }

  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public ExtendedStatsAggregation setField(String val) { this._field = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_sigma$isSet) {
      builder.field(SIGMA.getPreferredName(), _sigma);
    }
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
  }

  @Override
  public ExtendedStatsAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ExtendedStatsAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ExtendedStatsAggregation, Void> PARSER =
    new ObjectParser<>(ExtendedStatsAggregation.class.getName(), false, ExtendedStatsAggregation::new);

  static {
    PARSER.declareDouble(ExtendedStatsAggregation::setSigma, SIGMA);
    PARSER.declareString(ExtendedStatsAggregation::setField, FIELD);
  }

}
