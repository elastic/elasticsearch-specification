
package org.elasticsearch.mapping.types.geo.geo_point;

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

public class GeoPointProperty  implements XContentable<GeoPointProperty> {
  
  static final ParseField IGNORE_MALFORMED = new ParseField("ignore_malformed");
  private Boolean _ignoreMalformed;
  public Boolean getIgnoreMalformed() { return this._ignoreMalformed; }
  public GeoPointProperty setIgnoreMalformed(Boolean val) { this._ignoreMalformed = val; return this; }


  static final ParseField IGNORE_Z_VALUE = new ParseField("ignore_z_value");
  private Boolean _ignoreZValue;
  public Boolean getIgnoreZValue() { return this._ignoreZValue; }
  public GeoPointProperty setIgnoreZValue(Boolean val) { this._ignoreZValue = val; return this; }


  static final ParseField NULL_VALUE = new ParseField("null_value");
  private GeoLocation _nullValue;
  public GeoLocation getNullValue() { return this._nullValue; }
  public GeoPointProperty setNullValue(GeoLocation val) { this._nullValue = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_ignoreMalformed != null) {
      builder.field(IGNORE_MALFORMED.getPreferredName(), _ignoreMalformed);
    }
    if (_ignoreZValue != null) {
      builder.field(IGNORE_Z_VALUE.getPreferredName(), _ignoreZValue);
    }
    if (_nullValue != null) {
      builder.field(NULL_VALUE.getPreferredName());
      _nullValue.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public GeoPointProperty fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GeoPointProperty.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GeoPointProperty, Void> PARSER =
    new ObjectParser<>(GeoPointProperty.class.getName(), false, GeoPointProperty::new);

  static {
    PARSER.declareBoolean(GeoPointProperty::setIgnoreMalformed, IGNORE_MALFORMED);
    PARSER.declareBoolean(GeoPointProperty::setIgnoreZValue, IGNORE_Z_VALUE);
    PARSER.declareObject(GeoPointProperty::setNullValue, (p, t) -> GeoLocation.PARSER.apply(p, t), NULL_VALUE);
  }

}
