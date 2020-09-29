
package org.elasticsearch.query_dsl.geo.bounding_box;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.query_dsl.geo.bounding_box.*;
import org.elasticsearch.query_dsl.geo.*;
import org.elasticsearch.query_dsl.abstractions.query.*;

public class GeoBoundingBoxQuery extends QueryBase implements XContentable<GeoBoundingBoxQuery> {
  
  static final ParseField BOUNDING_BOX = new ParseField("bounding_box");
  private BoundingBox _boundingBox;
  public BoundingBox getBoundingBox() { return this._boundingBox; }
  public GeoBoundingBoxQuery setBoundingBox(BoundingBox val) { this._boundingBox = val; return this; }

  static final ParseField TYPE = new ParseField("type");
  private GeoExecution _type;
  public GeoExecution getType() { return this._type; }
  public GeoBoundingBoxQuery setType(GeoExecution val) { this._type = val; return this; }

  static final ParseField VALIDATION_METHOD = new ParseField("validation_method");
  private GeoValidationMethod _validationMethod;
  public GeoValidationMethod getValidationMethod() { return this._validationMethod; }
  public GeoBoundingBoxQuery setValidationMethod(GeoValidationMethod val) { this._validationMethod = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_boundingBox != null) {
      builder.field(BOUNDING_BOX.getPreferredName());
      _boundingBox.toXContent(builder, params);
    }
    if (_type != null) {
      builder.field(TYPE.getPreferredName());
      _type.toXContent(builder, params);
    }
    if (_validationMethod != null) {
      builder.field(VALIDATION_METHOD.getPreferredName());
      _validationMethod.toXContent(builder, params);
    }
  }

  @Override
  public GeoBoundingBoxQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GeoBoundingBoxQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GeoBoundingBoxQuery, Void> PARSER =
    new ObjectParser<>(GeoBoundingBoxQuery.class.getName(), false, GeoBoundingBoxQuery::new);

  static {
    PARSER.declareObject(GeoBoundingBoxQuery::setBoundingBox, (p, t) -> BoundingBox.PARSER.apply(p, t), BOUNDING_BOX);
    PARSER.declareField(GeoBoundingBoxQuery::setType, (p, t) -> GeoExecution.PARSER.apply(p), TYPE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareField(GeoBoundingBoxQuery::setValidationMethod, (p, t) -> GeoValidationMethod.PARSER.apply(p), VALIDATION_METHOD, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
