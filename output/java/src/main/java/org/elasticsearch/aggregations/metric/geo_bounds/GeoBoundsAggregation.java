
package org.elasticsearch.aggregations.metric.geo_bounds;

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


public class GeoBoundsAggregation  implements XContentable<GeoBoundsAggregation> {
  
  static final ParseField WRAP_LONGITUDE = new ParseField("wrap_longitude");
  private Boolean _wrapLongitude;
  public Boolean getWrapLongitude() { return this._wrapLongitude; }
  public GeoBoundsAggregation setWrapLongitude(Boolean val) { this._wrapLongitude = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_wrapLongitude != null) {
      builder.field(WRAP_LONGITUDE.getPreferredName(), _wrapLongitude);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public GeoBoundsAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GeoBoundsAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GeoBoundsAggregation, Void> PARSER =
    new ObjectParser<>(GeoBoundsAggregation.class.getName(), false, GeoBoundsAggregation::new);

  static {
    PARSER.declareBoolean(GeoBoundsAggregation::setWrapLongitude, WRAP_LONGITUDE);
  }

}
