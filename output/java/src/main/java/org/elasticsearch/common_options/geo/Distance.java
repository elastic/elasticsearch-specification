
package org.elasticsearch.common_options.geo;

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
import org.elasticsearch.internal.*;
import org.elasticsearch.common_options.geo.*;

public class Distance  implements XContentable<Distance> {
  
  static final ParseField PRECISION = new ParseField("precision");
  private Double _precision;
  public Double getPrecision() { return this._precision; }
  public Distance setPrecision(Double val) { this._precision = val; return this; }


  static final ParseField UNIT = new ParseField("unit");
  private DistanceUnit _unit;
  public DistanceUnit getUnit() { return this._unit; }
  public Distance setUnit(DistanceUnit val) { this._unit = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_precision != null) {
      builder.field(PRECISION.getPreferredName(), _precision);
    }
    if (_unit != null) {
      builder.field(UNIT.getPreferredName());
      _unit.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public Distance fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return Distance.PARSER.apply(parser, null);
  }

  public static final ObjectParser<Distance, Void> PARSER =
    new ObjectParser<>(Distance.class.getName(), false, Distance::new);

  static {
    PARSER.declareDouble(Distance::setPrecision, PRECISION);
    PARSER.declareField(Distance::setUnit, (p, t) -> DistanceUnit.PARSER.apply(p), UNIT, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
