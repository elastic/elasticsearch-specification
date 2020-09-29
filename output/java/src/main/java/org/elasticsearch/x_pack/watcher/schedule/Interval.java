
package org.elasticsearch.x_pack.watcher.schedule;

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
import org.elasticsearch.x_pack.watcher.schedule.*;

public class Interval extends ScheduleBase implements XContentable<Interval> {
  
  static final ParseField FACTOR = new ParseField("factor");
  private long _factor;
  private boolean _factor$isSet;
  public long getFactor() { return this._factor; }
  public Interval setFactor(long val) {
    this._factor = val;
    _factor$isSet = true;
    return this;
  }

  static final ParseField UNIT = new ParseField("unit");
  private IntervalUnit _unit;
  public IntervalUnit getUnit() { return this._unit; }
  public Interval setUnit(IntervalUnit val) { this._unit = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_factor$isSet) {
      builder.field(FACTOR.getPreferredName(), _factor);
    }
    if (_unit != null) {
      builder.field(UNIT.getPreferredName());
      _unit.toXContent(builder, params);
    }
  }

  @Override
  public Interval fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return Interval.PARSER.apply(parser, null);
  }

  public static final ObjectParser<Interval, Void> PARSER =
    new ObjectParser<>(Interval.class.getName(), false, Interval::new);

  static {
    PARSER.declareLong(Interval::setFactor, FACTOR);
    PARSER.declareField(Interval::setUnit, (p, t) -> IntervalUnit.PARSER.apply(p), UNIT, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
