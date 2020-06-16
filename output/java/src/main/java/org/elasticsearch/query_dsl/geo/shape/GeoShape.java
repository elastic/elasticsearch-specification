
package org.elasticsearch.query_dsl.geo.shape;

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


public class GeoShape  implements XContentable<GeoShape> {
  
  static final ParseField TYPE = new ParseField("type");
  private String _type;
  public String getType() { return this._type; }
  public GeoShape setType(String val) { this._type = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_type != null) {
      builder.field(TYPE.getPreferredName(), _type);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public GeoShape fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GeoShape.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GeoShape, Void> PARSER =
    new ObjectParser<>(GeoShape.class.getName(), false, GeoShape::new);

  static {
    PARSER.declareString(GeoShape::setType, TYPE);
  }

}
