
package org.elasticsearch.query_dsl.geo;

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

public class GeoLocation  implements XContentable<GeoLocation> {
  
  static final ParseField LAT = new ParseField("lat");
  private double _lat;
  private boolean _lat$isSet;
  public double getLat() { return this._lat; }
  public GeoLocation setLat(double val) {
    this._lat = val;
    _lat$isSet = true;
    return this;
  }

  static final ParseField LON = new ParseField("lon");
  private double _lon;
  private boolean _lon$isSet;
  public double getLon() { return this._lon; }
  public GeoLocation setLon(double val) {
    this._lon = val;
    _lon$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_lat$isSet) {
      builder.field(LAT.getPreferredName(), _lat);
    }
    if (_lon$isSet) {
      builder.field(LON.getPreferredName(), _lon);
    }
  }

  @Override
  public GeoLocation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GeoLocation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GeoLocation, Void> PARSER =
    new ObjectParser<>(GeoLocation.class.getName(), false, GeoLocation::new);

  static {
    PARSER.declareDouble(GeoLocation::setLat, LAT);
    PARSER.declareDouble(GeoLocation::setLon, LON);
  }

}
