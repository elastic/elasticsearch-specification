
package org.elasticsearch.x_pack.watcher.acknowledge_watch;

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
import org.elasticsearch.x_pack.watcher.acknowledge_watch.*;
import org.elasticsearch.internal.*;

public class AcknowledgeState  implements XContentable<AcknowledgeState> {
  
  static final ParseField STATE = new ParseField("state");
  private AcknowledgementState _state;
  public AcknowledgementState getState() { return this._state; }
  public AcknowledgeState setState(AcknowledgementState val) { this._state = val; return this; }


  static final ParseField TIMESTAMP = new ParseField("timestamp");
  private Date _timestamp;
  public Date getTimestamp() { return this._timestamp; }
  public AcknowledgeState setTimestamp(Date val) { this._timestamp = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_state != null) {
      builder.field(STATE.getPreferredName());
      _state.toXContent(builder, params);
    }
    if (_timestamp != null) {
      builder.field(TIMESTAMP.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_timestamp.toInstant()));
    }
    builder.endObject();
    return builder;
  }

  @Override
  public AcknowledgeState fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return AcknowledgeState.PARSER.apply(parser, null);
  }

  public static final ObjectParser<AcknowledgeState, Void> PARSER =
    new ObjectParser<>(AcknowledgeState.class.getName(), false, AcknowledgeState::new);

  static {
    PARSER.declareField(AcknowledgeState::setState, (p, t) -> AcknowledgementState.PARSER.apply(p), STATE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareObject(AcknowledgeState::setTimestamp, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), TIMESTAMP);
  }

}
