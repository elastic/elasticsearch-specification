
package org.elasticsearch.query_dsl.span.gap;

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
import org.elasticsearch.common_abstractions.infer.field.*;
import org.elasticsearch.internal.*;

public class SpanGapQuery  implements XContentable<SpanGapQuery> {
  
  static final ParseField FIELD = new ParseField("field");
  private Field _field;
  public Field getField() { return this._field; }
  public SpanGapQuery setField(Field val) { this._field = val; return this; }


  static final ParseField WIDTH = new ParseField("width");
  private Integer _width;
  public Integer getWidth() { return this._width; }
  public SpanGapQuery setWidth(Integer val) { this._width = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_field != null) {
      builder.field(FIELD.getPreferredName());
      _field.toXContent(builder, params);
    }
    if (_width != null) {
      builder.field(WIDTH.getPreferredName(), _width);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public SpanGapQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SpanGapQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SpanGapQuery, Void> PARSER =
    new ObjectParser<>(SpanGapQuery.class.getName(), false, SpanGapQuery::new);

  static {
    PARSER.declareObject(SpanGapQuery::setField, (p, t) -> Field.createFrom(p), FIELD);
    PARSER.declareInt(SpanGapQuery::setWidth, WIDTH);
  }

}
