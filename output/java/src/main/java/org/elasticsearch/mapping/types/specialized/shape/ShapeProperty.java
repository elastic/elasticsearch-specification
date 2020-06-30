
package org.elasticsearch.mapping.types.specialized.shape;

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
import org.elasticsearch.mapping.types.specialized.shape.*;

public class ShapeProperty  implements XContentable<ShapeProperty> {
  
  static final ParseField IGNORE_MALFORMED = new ParseField("ignore_malformed");
  private Boolean _ignoreMalformed;
  public Boolean getIgnoreMalformed() { return this._ignoreMalformed; }
  public ShapeProperty setIgnoreMalformed(Boolean val) { this._ignoreMalformed = val; return this; }


  static final ParseField IGNORE_Z_VALUE = new ParseField("ignore_z_value");
  private Boolean _ignoreZValue;
  public Boolean getIgnoreZValue() { return this._ignoreZValue; }
  public ShapeProperty setIgnoreZValue(Boolean val) { this._ignoreZValue = val; return this; }


  static final ParseField ORIENTATION = new ParseField("orientation");
  private ShapeOrientation _orientation;
  public ShapeOrientation getOrientation() { return this._orientation; }
  public ShapeProperty setOrientation(ShapeOrientation val) { this._orientation = val; return this; }


  static final ParseField COERCE = new ParseField("coerce");
  private Boolean _coerce;
  public Boolean getCoerce() { return this._coerce; }
  public ShapeProperty setCoerce(Boolean val) { this._coerce = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_ignoreMalformed != null) {
      builder.field(IGNORE_MALFORMED.getPreferredName(), _ignoreMalformed);
    }
    if (_ignoreZValue != null) {
      builder.field(IGNORE_Z_VALUE.getPreferredName(), _ignoreZValue);
    }
    if (_orientation != null) {
      builder.field(ORIENTATION.getPreferredName());
      _orientation.toXContent(builder, params);
    }
    if (_coerce != null) {
      builder.field(COERCE.getPreferredName(), _coerce);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ShapeProperty fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ShapeProperty.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ShapeProperty, Void> PARSER =
    new ObjectParser<>(ShapeProperty.class.getName(), false, ShapeProperty::new);

  static {
    PARSER.declareBoolean(ShapeProperty::setIgnoreMalformed, IGNORE_MALFORMED);
    PARSER.declareBoolean(ShapeProperty::setIgnoreZValue, IGNORE_Z_VALUE);
    PARSER.declareField(ShapeProperty::setOrientation, (p, t) -> ShapeOrientation.PARSER.apply(p), ORIENTATION, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareBoolean(ShapeProperty::setCoerce, COERCE);
  }

}
