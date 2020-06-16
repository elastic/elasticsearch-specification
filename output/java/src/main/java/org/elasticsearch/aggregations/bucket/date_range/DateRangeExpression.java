
package org.elasticsearch.aggregations.bucket.date_range;

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
import org.elasticsearch.common_options.date_math.*;

public class DateRangeExpression  implements XContentable<DateRangeExpression> {
  
  static final ParseField FROM = new ParseField("from");
  private DateMath _from;
  public DateMath getFrom() { return this._from; }
  public DateRangeExpression setFrom(DateMath val) { this._from = val; return this; }


  static final ParseField KEY = new ParseField("key");
  private String _key;
  public String getKey() { return this._key; }
  public DateRangeExpression setKey(String val) { this._key = val; return this; }


  static final ParseField TO = new ParseField("to");
  private DateMath _to;
  public DateMath getTo() { return this._to; }
  public DateRangeExpression setTo(DateMath val) { this._to = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_from != null) {
      builder.field(FROM.getPreferredName());
      _from.toXContent(builder, params);
    }
    if (_key != null) {
      builder.field(KEY.getPreferredName(), _key);
    }
    if (_to != null) {
      builder.field(TO.getPreferredName());
      _to.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public DateRangeExpression fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DateRangeExpression.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DateRangeExpression, Void> PARSER =
    new ObjectParser<>(DateRangeExpression.class.getName(), false, DateRangeExpression::new);

  static {
    PARSER.declareObject(DateRangeExpression::setFrom, (p, t) -> DateMath.PARSER.apply(p, t), FROM);
    PARSER.declareString(DateRangeExpression::setKey, KEY);
    PARSER.declareObject(DateRangeExpression::setTo, (p, t) -> DateMath.PARSER.apply(p, t), TO);
  }

}
