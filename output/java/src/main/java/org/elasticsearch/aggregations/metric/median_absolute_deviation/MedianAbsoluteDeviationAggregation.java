
package org.elasticsearch.aggregations.metric.median_absolute_deviation;

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

public class MedianAbsoluteDeviationAggregation  implements XContentable<MedianAbsoluteDeviationAggregation> {
  
  static final ParseField COMPRESSION = new ParseField("compression");
  private Double _compression;
  public Double getCompression() { return this._compression; }
  public MedianAbsoluteDeviationAggregation setCompression(Double val) { this._compression = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_compression != null) {
      builder.field(COMPRESSION.getPreferredName(), _compression);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public MedianAbsoluteDeviationAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return MedianAbsoluteDeviationAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<MedianAbsoluteDeviationAggregation, Void> PARSER =
    new ObjectParser<>(MedianAbsoluteDeviationAggregation.class.getName(), false, MedianAbsoluteDeviationAggregation::new);

  static {
    PARSER.declareDouble(MedianAbsoluteDeviationAggregation::setCompression, COMPRESSION);
  }

}
