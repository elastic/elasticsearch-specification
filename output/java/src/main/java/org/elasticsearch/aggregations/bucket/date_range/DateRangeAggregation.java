
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
import org.elasticsearch.common_abstractions.infer.field.*;
import org.elasticsearch.aggregations.bucket.date_range.*;

public class DateRangeAggregation  implements XContentable<DateRangeAggregation> {
  
  static final ParseField FIELD = new ParseField("field");
  private Field _field;
  public Field getField() { return this._field; }
  public DateRangeAggregation setField(Field val) { this._field = val; return this; }


  static final ParseField FORMAT = new ParseField("format");
  private String _format;
  public String getFormat() { return this._format; }
  public DateRangeAggregation setFormat(String val) { this._format = val; return this; }


  static final ParseField MISSING = new ParseField("missing");
  private Object _missing;
  public Object getMissing() { return this._missing; }
  public DateRangeAggregation setMissing(Object val) { this._missing = val; return this; }


  static final ParseField RANGES = new ParseField("ranges");
  private List<DateRangeExpression> _ranges;
  public List<DateRangeExpression> getRanges() { return this._ranges; }
  public DateRangeAggregation setRanges(List<DateRangeExpression> val) { this._ranges = val; return this; }


  static final ParseField TIME_ZONE = new ParseField("time_zone");
  private String _timeZone;
  public String getTimeZone() { return this._timeZone; }
  public DateRangeAggregation setTimeZone(String val) { this._timeZone = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_field != null) {
      builder.field(FIELD.getPreferredName());
      _field.toXContent(builder, params);
    }
    if (_format != null) {
      builder.field(FORMAT.getPreferredName(), _format);
    }
    if (_missing != null) {
      builder.field(MISSING.getPreferredName(), _missing);
    }
    if (_ranges != null) {
      builder.array(RANGES.getPreferredName(), _ranges);
    }
    if (_timeZone != null) {
      builder.field(TIME_ZONE.getPreferredName(), _timeZone);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public DateRangeAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DateRangeAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DateRangeAggregation, Void> PARSER =
    new ObjectParser<>(DateRangeAggregation.class.getName(), false, DateRangeAggregation::new);

  static {
    PARSER.declareObject(DateRangeAggregation::setField, (p, t) -> Field.createFrom(p), FIELD);
    PARSER.declareString(DateRangeAggregation::setFormat, FORMAT);
    PARSER.declareObject(DateRangeAggregation::setMissing, (p, t) -> p.objectText(), MISSING);
    PARSER.declareObjectArray(DateRangeAggregation::setRanges, (p, t) -> DateRangeExpression.PARSER.apply(p, t), RANGES);
    PARSER.declareString(DateRangeAggregation::setTimeZone, TIME_ZONE);
  }

}
