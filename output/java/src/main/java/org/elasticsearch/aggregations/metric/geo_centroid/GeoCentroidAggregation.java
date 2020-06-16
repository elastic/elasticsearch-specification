
package org.elasticsearch.aggregations.metric.geo_centroid;

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


public class GeoCentroidAggregation  implements XContentable<GeoCentroidAggregation> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public GeoCentroidAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GeoCentroidAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GeoCentroidAggregation, Void> PARSER =
    new ObjectParser<>(GeoCentroidAggregation.class.getName(), false, GeoCentroidAggregation::new);

  static {
    
  }

}
