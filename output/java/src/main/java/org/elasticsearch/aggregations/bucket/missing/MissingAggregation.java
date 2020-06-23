
package org.elasticsearch.aggregations.bucket.missing;

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

public class MissingAggregation  implements XContentable<MissingAggregation> {
  
  static final ParseField FIELD = new ParseField("field");
  private Field _field;
  public Field getField() { return this._field; }
  public MissingAggregation setField(Field val) { this._field = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_field != null) {
      builder.field(FIELD.getPreferredName());
      _field.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public MissingAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return MissingAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<MissingAggregation, Void> PARSER =
    new ObjectParser<>(MissingAggregation.class.getName(), false, MissingAggregation::new);

  static {
    PARSER.declareObject(MissingAggregation::setField, (p, t) -> Field.createFrom(p), FIELD);
  }

}
