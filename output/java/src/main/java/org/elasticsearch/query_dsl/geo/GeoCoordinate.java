
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
import org.elasticsearch.query_dsl.geo.*;

public class GeoCoordinate extends GeoLocation implements XContentable<GeoCoordinate> {
  
  static final ParseField Z = new ParseField("z");
  private double _z;
  private boolean _z$isSet;
  public double getZ() { return this._z; }
  public GeoCoordinate setZ(double val) {
    this._z = val;
    _z$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_z$isSet) {
      builder.field(Z.getPreferredName(), _z);
    }
  }

  @Override
  public GeoCoordinate fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GeoCoordinate.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GeoCoordinate, Void> PARSER =
    new ObjectParser<>(GeoCoordinate.class.getName(), false, GeoCoordinate::new);

  static {
    PARSER.declareDouble(GeoCoordinate::setZ, Z);
  }

}
