
package org.elasticsearch.aggregations.metric.median_absolute_deviation;

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
import org.elasticsearch.aggregations.*;

public class MedianAbsoluteDeviationAggregation  implements XContentable<MedianAbsoluteDeviationAggregation> {
  
  static final ParseField COMPRESSION = new ParseField("compression");
  private double _compression;
  private boolean _compression$isSet;
  public double getCompression() { return this._compression; }
  public MedianAbsoluteDeviationAggregation setCompression(double val) {
    this._compression = val;
    _compression$isSet = true;
    return this;
  }

  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public MedianAbsoluteDeviationAggregation setField(String val) { this._field = val; return this; }

  static final ParseField MISSING = new ParseField("missing");
  private Missing _missing;
  public Missing getMissing() { return this._missing; }
  public MedianAbsoluteDeviationAggregation setMissing(Missing val) { this._missing = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_compression$isSet) {
      builder.field(COMPRESSION.getPreferredName(), _compression);
    }
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_missing != null) {
      builder.field(MISSING.getPreferredName());
      _missing.toXContent(builder, params);
    }
  }

  @Override
  public MedianAbsoluteDeviationAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return MedianAbsoluteDeviationAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<MedianAbsoluteDeviationAggregation, Void> PARSER =
    new ObjectParser<>(MedianAbsoluteDeviationAggregation.class.getName(), false, MedianAbsoluteDeviationAggregation::new);

  static {
    PARSER.declareDouble(MedianAbsoluteDeviationAggregation::setCompression, COMPRESSION);
    PARSER.declareString(MedianAbsoluteDeviationAggregation::setField, FIELD);
    PARSER.declareObject(MedianAbsoluteDeviationAggregation::setMissing, (p, t) -> Missing.PARSER.apply(p, t), MISSING);
  }

}
