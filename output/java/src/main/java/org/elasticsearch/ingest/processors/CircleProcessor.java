
package org.elasticsearch.ingest.processors;

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
import org.elasticsearch.ingest.processors.*;
import org.elasticsearch.ingest.*;

public class CircleProcessor extends ProcessorBase implements XContentable<CircleProcessor> {
  
  static final ParseField ERROR_DISTANCE = new ParseField("error_distance");
  private double _errorDistance;
  private boolean _errorDistance$isSet;
  public double getErrorDistance() { return this._errorDistance; }
  public CircleProcessor setErrorDistance(double val) {
    this._errorDistance = val;
    _errorDistance$isSet = true;
    return this;
  }

  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public CircleProcessor setField(String val) { this._field = val; return this; }

  static final ParseField IGNORE_MISSING = new ParseField("ignore_missing");
  private Boolean _ignoreMissing;
  public Boolean getIgnoreMissing() { return this._ignoreMissing; }
  public CircleProcessor setIgnoreMissing(Boolean val) { this._ignoreMissing = val; return this; }

  static final ParseField SHAPE_TYPE = new ParseField("shape_type");
  private ShapeType _shapeType;
  public ShapeType getShapeType() { return this._shapeType; }
  public CircleProcessor setShapeType(ShapeType val) { this._shapeType = val; return this; }

  static final ParseField TARGET_FIELD = new ParseField("target_field");
  private String _targetField;
  public String getTargetField() { return this._targetField; }
  public CircleProcessor setTargetField(String val) { this._targetField = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_errorDistance$isSet) {
      builder.field(ERROR_DISTANCE.getPreferredName(), _errorDistance);
    }
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_ignoreMissing != null) {
      builder.field(IGNORE_MISSING.getPreferredName(), _ignoreMissing);
    }
    if (_shapeType != null) {
      builder.field(SHAPE_TYPE.getPreferredName());
      _shapeType.toXContent(builder, params);
    }
    if (_targetField != null) {
      builder.field(TARGET_FIELD.getPreferredName(), _targetField);
    }
  }

  @Override
  public CircleProcessor fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CircleProcessor.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CircleProcessor, Void> PARSER =
    new ObjectParser<>(CircleProcessor.class.getName(), false, CircleProcessor::new);

  static {
    PARSER.declareDouble(CircleProcessor::setErrorDistance, ERROR_DISTANCE);
    PARSER.declareString(CircleProcessor::setField, FIELD);
    PARSER.declareBoolean(CircleProcessor::setIgnoreMissing, IGNORE_MISSING);
    PARSER.declareField(CircleProcessor::setShapeType, (p, t) -> ShapeType.PARSER.apply(p), SHAPE_TYPE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareString(CircleProcessor::setTargetField, TARGET_FIELD);
  }

}
