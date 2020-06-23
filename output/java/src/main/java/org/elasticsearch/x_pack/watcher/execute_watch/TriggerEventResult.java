
package org.elasticsearch.x_pack.watcher.execute_watch;

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
import org.elasticsearch.x_pack.watcher.trigger.*;
import org.elasticsearch.internal.*;

public class TriggerEventResult  implements XContentable<TriggerEventResult> {
  
  static final ParseField MANUAL = new ParseField("manual");
  private TriggerEventContainer _manual;
  public TriggerEventContainer getManual() { return this._manual; }
  public TriggerEventResult setManual(TriggerEventContainer val) { this._manual = val; return this; }


  static final ParseField TRIGGERED_TIME = new ParseField("triggered_time");
  private Date _triggeredTime;
  public Date getTriggeredTime() { return this._triggeredTime; }
  public TriggerEventResult setTriggeredTime(Date val) { this._triggeredTime = val; return this; }


  static final ParseField TYPE = new ParseField("type");
  private String _type;
  public String getType() { return this._type; }
  public TriggerEventResult setType(String val) { this._type = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_manual != null) {
      builder.field(MANUAL.getPreferredName());
      _manual.toXContent(builder, params);
    }
    if (_triggeredTime != null) {
      builder.field(TRIGGERED_TIME.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_triggeredTime.toInstant()));
    }
    if (_type != null) {
      builder.field(TYPE.getPreferredName(), _type);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public TriggerEventResult fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TriggerEventResult.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TriggerEventResult, Void> PARSER =
    new ObjectParser<>(TriggerEventResult.class.getName(), false, TriggerEventResult::new);

  static {
    PARSER.declareObject(TriggerEventResult::setManual, (p, t) -> TriggerEventContainer.PARSER.apply(p, t), MANUAL);
    PARSER.declareObject(TriggerEventResult::setTriggeredTime, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), TRIGGERED_TIME);
    PARSER.declareString(TriggerEventResult::setType, TYPE);
  }

}
