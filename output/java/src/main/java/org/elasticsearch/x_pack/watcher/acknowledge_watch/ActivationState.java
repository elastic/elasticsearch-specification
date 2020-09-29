
package org.elasticsearch.x_pack.watcher.acknowledge_watch;

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

public class ActivationState  implements XContentable<ActivationState> {
  
  static final ParseField ACTIVE = new ParseField("active");
  private Boolean _active;
  public Boolean getActive() { return this._active; }
  public ActivationState setActive(Boolean val) { this._active = val; return this; }

  static final ParseField TIMESTAMP = new ParseField("timestamp");
  private Date _timestamp;
  public Date getTimestamp() { return this._timestamp; }
  public ActivationState setTimestamp(Date val) { this._timestamp = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_active != null) {
      builder.field(ACTIVE.getPreferredName(), _active);
    }
    if (_timestamp != null) {
      builder.field(TIMESTAMP.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_timestamp.toInstant()));
    }
  }

  @Override
  public ActivationState fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ActivationState.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ActivationState, Void> PARSER =
    new ObjectParser<>(ActivationState.class.getName(), false, ActivationState::new);

  static {
    PARSER.declareBoolean(ActivationState::setActive, ACTIVE);
    PARSER.declareObject(ActivationState::setTimestamp, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), TIMESTAMP);
  }

}
