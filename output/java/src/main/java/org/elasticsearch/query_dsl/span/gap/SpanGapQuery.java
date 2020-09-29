
package org.elasticsearch.query_dsl.span.gap;

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

public class SpanGapQuery  implements XContentable<SpanGapQuery> {
  
  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public SpanGapQuery setField(String val) { this._field = val; return this; }

  static final ParseField WIDTH = new ParseField("width");
  private int _width;
  private boolean _width$isSet;
  public int getWidth() { return this._width; }
  public SpanGapQuery setWidth(int val) {
    this._width = val;
    _width$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_width$isSet) {
      builder.field(WIDTH.getPreferredName(), _width);
    }
  }

  @Override
  public SpanGapQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SpanGapQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SpanGapQuery, Void> PARSER =
    new ObjectParser<>(SpanGapQuery.class.getName(), false, SpanGapQuery::new);

  static {
    PARSER.declareString(SpanGapQuery::setField, FIELD);
    PARSER.declareInt(SpanGapQuery::setWidth, WIDTH);
  }

}
