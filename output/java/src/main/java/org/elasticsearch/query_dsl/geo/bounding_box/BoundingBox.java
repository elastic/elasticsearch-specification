
package org.elasticsearch.query_dsl.geo.bounding_box;

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

public class BoundingBox  implements XContentable<BoundingBox> {
  
  static final ParseField BOTTOM_RIGHT = new ParseField("bottom_right");
  private GeoLocation _bottomRight;
  public GeoLocation getBottomRight() { return this._bottomRight; }
  public BoundingBox setBottomRight(GeoLocation val) { this._bottomRight = val; return this; }


  static final ParseField TOP_LEFT = new ParseField("top_left");
  private GeoLocation _topLeft;
  public GeoLocation getTopLeft() { return this._topLeft; }
  public BoundingBox setTopLeft(GeoLocation val) { this._topLeft = val; return this; }


  static final ParseField WKT = new ParseField("wkt");
  private String _wkt;
  public String getWkt() { return this._wkt; }
  public BoundingBox setWkt(String val) { this._wkt = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_bottomRight != null) {
      builder.field(BOTTOM_RIGHT.getPreferredName());
      _bottomRight.toXContent(builder, params);
    }
    if (_topLeft != null) {
      builder.field(TOP_LEFT.getPreferredName());
      _topLeft.toXContent(builder, params);
    }
    if (_wkt != null) {
      builder.field(WKT.getPreferredName(), _wkt);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public BoundingBox fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return BoundingBox.PARSER.apply(parser, null);
  }

  public static final ObjectParser<BoundingBox, Void> PARSER =
    new ObjectParser<>(BoundingBox.class.getName(), false, BoundingBox::new);

  static {
    PARSER.declareObject(BoundingBox::setBottomRight, (p, t) -> GeoLocation.PARSER.apply(p, t), BOTTOM_RIGHT);
    PARSER.declareObject(BoundingBox::setTopLeft, (p, t) -> GeoLocation.PARSER.apply(p, t), TOP_LEFT);
    PARSER.declareString(BoundingBox::setWkt, WKT);
  }

}
