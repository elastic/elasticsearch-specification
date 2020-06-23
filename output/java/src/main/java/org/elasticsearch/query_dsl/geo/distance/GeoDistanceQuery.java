
package org.elasticsearch.query_dsl.geo.distance;

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
import org.elasticsearch.common_options.geo.*;
import org.elasticsearch.query_dsl.geo.*;

public class GeoDistanceQuery  implements XContentable<GeoDistanceQuery> {
  
  static final ParseField DISTANCE = new ParseField("distance");
  private Distance _distance;
  public Distance getDistance() { return this._distance; }
  public GeoDistanceQuery setDistance(Distance val) { this._distance = val; return this; }


  static final ParseField DISTANCE_TYPE = new ParseField("distance_type");
  private GeoDistanceType _distanceType;
  public GeoDistanceType getDistanceType() { return this._distanceType; }
  public GeoDistanceQuery setDistanceType(GeoDistanceType val) { this._distanceType = val; return this; }


  static final ParseField LOCATION = new ParseField("location");
  private GeoLocation _location;
  public GeoLocation getLocation() { return this._location; }
  public GeoDistanceQuery setLocation(GeoLocation val) { this._location = val; return this; }


  static final ParseField VALIDATION_METHOD = new ParseField("validation_method");
  private GeoValidationMethod _validationMethod;
  public GeoValidationMethod getValidationMethod() { return this._validationMethod; }
  public GeoDistanceQuery setValidationMethod(GeoValidationMethod val) { this._validationMethod = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_distance != null) {
      builder.field(DISTANCE.getPreferredName());
      _distance.toXContent(builder, params);
    }
    if (_distanceType != null) {
      builder.field(DISTANCE_TYPE.getPreferredName());
      _distanceType.toXContent(builder, params);
    }
    if (_location != null) {
      builder.field(LOCATION.getPreferredName());
      _location.toXContent(builder, params);
    }
    if (_validationMethod != null) {
      builder.field(VALIDATION_METHOD.getPreferredName());
      _validationMethod.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public GeoDistanceQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GeoDistanceQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GeoDistanceQuery, Void> PARSER =
    new ObjectParser<>(GeoDistanceQuery.class.getName(), false, GeoDistanceQuery::new);

  static {
    PARSER.declareObject(GeoDistanceQuery::setDistance, (p, t) -> Distance.PARSER.apply(p, t), DISTANCE);
    PARSER.declareField(GeoDistanceQuery::setDistanceType, (p, t) -> GeoDistanceType.PARSER.apply(p), DISTANCE_TYPE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareObject(GeoDistanceQuery::setLocation, (p, t) -> GeoLocation.PARSER.apply(p, t), LOCATION);
    PARSER.declareField(GeoDistanceQuery::setValidationMethod, (p, t) -> GeoValidationMethod.PARSER.apply(p), VALIDATION_METHOD, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
