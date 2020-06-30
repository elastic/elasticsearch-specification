
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
import org.elasticsearch.x_pack.watcher.condition.*;

public class ExecutionResultCondition  implements XContentable<ExecutionResultCondition> {
  
  static final ParseField MET = new ParseField("met");
  private Boolean _met;
  public Boolean getMet() { return this._met; }
  public ExecutionResultCondition setMet(Boolean val) { this._met = val; return this; }


  static final ParseField STATUS = new ParseField("status");
  private Status _status;
  public Status getStatus() { return this._status; }
  public ExecutionResultCondition setStatus(Status val) { this._status = val; return this; }


  static final ParseField TYPE = new ParseField("type");
  private ConditionType _type;
  public ConditionType getType() { return this._type; }
  public ExecutionResultCondition setType(ConditionType val) { this._type = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_met != null) {
      builder.field(MET.getPreferredName(), _met);
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
  public ExecutionResultCondition fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ExecutionResultCondition.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ExecutionResultCondition, Void> PARSER =
    new ObjectParser<>(ExecutionResultCondition.class.getName(), false, ExecutionResultCondition::new);

  static {
    PARSER.declareBoolean(ExecutionResultCondition::setMet, MET);
    PARSER.declareField(ExecutionResultCondition::setStatus, (p, t) -> Status.PARSER.apply(p), STATUS, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareField(ExecutionResultCondition::setType, (p, t) -> ConditionType.PARSER.apply(p), TYPE, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
