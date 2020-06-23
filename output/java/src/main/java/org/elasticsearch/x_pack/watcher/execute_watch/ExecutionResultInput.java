
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
import org.elasticsearch.x_pack.watcher.execution.*;
import org.elasticsearch.x_pack.watcher.input.*;

public class ExecutionResultInput  implements XContentable<ExecutionResultInput> {
  
  static final ParseField PAYLOAD = new ParseField("payload");
  private NamedContainer<String, Object> _payload;
  public NamedContainer<String, Object> getPayload() { return this._payload; }
  public ExecutionResultInput setPayload(NamedContainer<String, Object> val) { this._payload = val; return this; }


  static final ParseField STATUS = new ParseField("status");
  private Status _status;
  public Status getStatus() { return this._status; }
  public ExecutionResultInput setStatus(Status val) { this._status = val; return this; }


  static final ParseField TYPE = new ParseField("type");
  private InputType _type;
  public InputType getType() { return this._type; }
  public ExecutionResultInput setType(InputType val) { this._type = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_payload != null) {
      builder.field(PAYLOAD.getPreferredName());
      _payload.toXContent(builder, params);
    }
    if (_status != null) {
      builder.field(STATUS.getPreferredName());
      _status.toXContent(builder, params);
    }
    if (_type != null) {
      builder.field(TYPE.getPreferredName());
      _type.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ExecutionResultInput fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ExecutionResultInput.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ExecutionResultInput, Void> PARSER =
    new ObjectParser<>(ExecutionResultInput.class.getName(), false, ExecutionResultInput::new);

  static {
    PARSER.declareObject(ExecutionResultInput::setPayload, (p, t) -> new NamedContainer<>(n -> () -> n,XContentParser::binaryValue), PAYLOAD);
    PARSER.declareField(ExecutionResultInput::setStatus, (p, t) -> Status.PARSER.apply(p), STATUS, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareField(ExecutionResultInput::setType, (p, t) -> InputType.PARSER.apply(p), TYPE, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
