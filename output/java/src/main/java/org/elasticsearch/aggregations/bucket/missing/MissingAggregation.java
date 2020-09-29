
package org.elasticsearch.aggregations.bucket.missing;

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
import org.elasticsearch.aggregations.*;

public class MissingAggregation  implements XContentable<MissingAggregation> {
  
  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public MissingAggregation setField(String val) { this._field = val; return this; }

  static final ParseField MISSING = new ParseField("missing");
  private Missing _missing;
  public Missing getMissing() { return this._missing; }
  public MissingAggregation setMissing(Missing val) { this._missing = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_missing != null) {
      builder.field(MISSING.getPreferredName());
      _missing.toXContent(builder, params);
    }
  }

  @Override
  public MissingAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return MissingAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<MissingAggregation, Void> PARSER =
    new ObjectParser<>(MissingAggregation.class.getName(), false, MissingAggregation::new);

  static {
    PARSER.declareString(MissingAggregation::setField, FIELD);
    PARSER.declareObject(MissingAggregation::setMissing, (p, t) -> Missing.PARSER.apply(p, t), MISSING);
  }

}
