
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
import org.elasticsearch.internal.*;

public class ExecutionState  implements XContentable<ExecutionState> {
  
  static final ParseField SUCCESSFUL = new ParseField("successful");
  private Boolean _successful;
  public Boolean getSuccessful() { return this._successful; }
  public ExecutionState setSuccessful(Boolean val) { this._successful = val; return this; }


  static final ParseField TIMESTAMP = new ParseField("timestamp");
  private Date _timestamp;
  public Date getTimestamp() { return this._timestamp; }
  public ExecutionState setTimestamp(Date val) { this._timestamp = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_successful != null) {
      builder.field(SUCCESSFUL.getPreferredName(), _successful);
    }
    if (_timestamp != null) {
      builder.field(TIMESTAMP.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_timestamp.toInstant()));
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ExecutionState fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ExecutionState.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ExecutionState, Void> PARSER =
    new ObjectParser<>(ExecutionState.class.getName(), false, ExecutionState::new);

  static {
    PARSER.declareBoolean(ExecutionState::setSuccessful, SUCCESSFUL);
    PARSER.declareObject(ExecutionState::setTimestamp, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), TIMESTAMP);
  }

}
