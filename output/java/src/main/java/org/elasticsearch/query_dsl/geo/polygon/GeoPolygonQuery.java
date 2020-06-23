
package org.elasticsearch.query_dsl.geo.polygon;

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
import org.elasticsearch.query_dsl.geo.*;

public class GeoPolygonQuery  implements XContentable<GeoPolygonQuery> {
  
  static final ParseField POINTS = new ParseField("points");
  private List<GeoLocation> _points;
  public List<GeoLocation> getPoints() { return this._points; }
  public GeoPolygonQuery setPoints(List<GeoLocation> val) { this._points = val; return this; }


  static final ParseField VALIDATION_METHOD = new ParseField("validation_method");
  private GeoValidationMethod _validationMethod;
  public GeoValidationMethod getValidationMethod() { return this._validationMethod; }
  public GeoPolygonQuery setValidationMethod(GeoValidationMethod val) { this._validationMethod = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_points != null) {
      builder.array(POINTS.getPreferredName(), _points);
    }
    if (_validationMethod != null) {
      builder.field(VALIDATION_METHOD.getPreferredName());
      _validationMethod.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public GeoPolygonQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GeoPolygonQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GeoPolygonQuery, Void> PARSER =
    new ObjectParser<>(GeoPolygonQuery.class.getName(), false, GeoPolygonQuery::new);

  static {
    PARSER.declareObjectArray(GeoPolygonQuery::setPoints, (p, t) -> GeoLocation.PARSER.apply(p, t), POINTS);
    PARSER.declareField(GeoPolygonQuery::setValidationMethod, (p, t) -> GeoValidationMethod.PARSER.apply(p), VALIDATION_METHOD, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
