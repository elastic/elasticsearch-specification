
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
import org.elasticsearch.x_pack.watcher.condition.*;
import org.elasticsearch.x_pack.watcher.input.*;
import org.elasticsearch.x_pack.watcher.execute_watch.*;

public class WatchRecord  implements XContentable<WatchRecord> {
  
  static final ParseField CONDITION = new ParseField("condition");
  private ConditionContainer _condition;
  public ConditionContainer getCondition() { return this._condition; }
  public WatchRecord setCondition(ConditionContainer val) { this._condition = val; return this; }


  static final ParseField INPUT = new ParseField("input");
  private InputContainer _input;
  public InputContainer getInput() { return this._input; }
  public WatchRecord setInput(InputContainer val) { this._input = val; return this; }


  static final ParseField MESSAGES = new ParseField("messages");
  private List<String> _messages;
  public List<String> getMessages() { return this._messages; }
  public WatchRecord setMessages(List<String> val) { this._messages = val; return this; }


  static final ParseField METADATA = new ParseField("metadata");
  private NamedContainer<String, Object> _metadata;
  public NamedContainer<String, Object> getMetadata() { return this._metadata; }
  public WatchRecord setMetadata(NamedContainer<String, Object> val) { this._metadata = val; return this; }


  static final ParseField RESULT = new ParseField("result");
  private ExecutionResult _result;
  public ExecutionResult getResult() { return this._result; }
  public WatchRecord setResult(ExecutionResult val) { this._result = val; return this; }


  static final ParseField STATE = new ParseField("state");
  private ActionExecutionState _state;
  public ActionExecutionState getState() { return this._state; }
  public WatchRecord setState(ActionExecutionState val) { this._state = val; return this; }


  static final ParseField TRIGGER_EVENT = new ParseField("trigger_event");
  private TriggerEventResult _triggerEvent;
  public TriggerEventResult getTriggerEvent() { return this._triggerEvent; }
  public WatchRecord setTriggerEvent(TriggerEventResult val) { this._triggerEvent = val; return this; }


  static final ParseField USER = new ParseField("user");
  private String _user;
  public String getUser() { return this._user; }
  public WatchRecord setUser(String val) { this._user = val; return this; }


  static final ParseField NODE = new ParseField("node");
  private String _node;
  public String getNode() { return this._node; }
  public WatchRecord setNode(String val) { this._node = val; return this; }


  static final ParseField WATCH_ID = new ParseField("watch_id");
  private String _watchId;
  public String getWatchId() { return this._watchId; }
  public WatchRecord setWatchId(String val) { this._watchId = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_condition != null) {
      builder.field(CONDITION.getPreferredName());
      _condition.toXContent(builder, params);
    }
    if (_input != null) {
      builder.field(INPUT.getPreferredName());
      _input.toXContent(builder, params);
    }
    if (_messages != null) {
      builder.array(MESSAGES.getPreferredName(), _messages);
    }
    if (_metadata != null) {
      builder.field(METADATA.getPreferredName());
      _metadata.toXContent(builder, params);
    }
    if (_result != null) {
      builder.field(RESULT.getPreferredName());
      _result.toXContent(builder, params);
    }
    if (_state != null) {
      builder.field(STATE.getPreferredName());
      _state.toXContent(builder, params);
    }
    if (_triggerEvent != null) {
      builder.field(TRIGGER_EVENT.getPreferredName());
      _triggerEvent.toXContent(builder, params);
    }
    if (_user != null) {
      builder.field(USER.getPreferredName(), _user);
    }
    if (_node != null) {
      builder.field(NODE.getPreferredName(), _node);
    }
    if (_watchId != null) {
      builder.field(WATCH_ID.getPreferredName(), _watchId);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public WatchRecord fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return WatchRecord.PARSER.apply(parser, null);
  }

  public static final ObjectParser<WatchRecord, Void> PARSER =
    new ObjectParser<>(WatchRecord.class.getName(), false, WatchRecord::new);

  static {
    PARSER.declareObject(WatchRecord::setCondition, (p, t) -> ConditionContainer.PARSER.apply(p, t), CONDITION);
    PARSER.declareObject(WatchRecord::setInput, (p, t) -> InputContainer.PARSER.apply(p, t), INPUT);
    PARSER.declareStringArray(WatchRecord::setMessages, MESSAGES);
    PARSER.declareObject(WatchRecord::setMetadata, (p, t) -> new NamedContainer<>(n -> () -> n,XContentParser::binaryValue), METADATA);
    PARSER.declareObject(WatchRecord::setResult, (p, t) -> ExecutionResult.PARSER.apply(p, t), RESULT);
    PARSER.declareField(WatchRecord::setState, (p, t) -> ActionExecutionState.PARSER.apply(p), STATE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareObject(WatchRecord::setTriggerEvent, (p, t) -> TriggerEventResult.PARSER.apply(p, t), TRIGGER_EVENT);
    PARSER.declareString(WatchRecord::setUser, USER);
    PARSER.declareString(WatchRecord::setNode, NODE);
    PARSER.declareString(WatchRecord::setWatchId, WATCH_ID);
  }

}
