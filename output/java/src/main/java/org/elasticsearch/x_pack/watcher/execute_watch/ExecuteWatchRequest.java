
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
import org.elasticsearch.x_pack.watcher.schedule.*;
import org.elasticsearch.x_pack.watcher.*;

public class ExecuteWatchRequest  implements XContentable<ExecuteWatchRequest> {
  
  static final ParseField DEBUG = new ParseField("debug");
  private Boolean _debug;
  public Boolean getDebug() { return this._debug; }
  public ExecuteWatchRequest setDebug(Boolean val) { this._debug = val; return this; }


  static final ParseField ACTION_MODES = new ParseField("action_modes");
  private NamedContainer<String, ActionExecutionMode> _actionModes;
  public NamedContainer<String, ActionExecutionMode> getActionModes() { return this._actionModes; }
  public ExecuteWatchRequest setActionModes(NamedContainer<String, ActionExecutionMode> val) { this._actionModes = val; return this; }


  static final ParseField ALTERNATIVE_INPUT = new ParseField("alternative_input");
  private NamedContainer<String, Object> _alternativeInput;
  public NamedContainer<String, Object> getAlternativeInput() { return this._alternativeInput; }
  public ExecuteWatchRequest setAlternativeInput(NamedContainer<String, Object> val) { this._alternativeInput = val; return this; }


  static final ParseField IGNORE_CONDITION = new ParseField("ignore_condition");
  private Boolean _ignoreCondition;
  public Boolean getIgnoreCondition() { return this._ignoreCondition; }
  public ExecuteWatchRequest setIgnoreCondition(Boolean val) { this._ignoreCondition = val; return this; }


  static final ParseField RECORD_EXECUTION = new ParseField("record_execution");
  private Boolean _recordExecution;
  public Boolean getRecordExecution() { return this._recordExecution; }
  public ExecuteWatchRequest setRecordExecution(Boolean val) { this._recordExecution = val; return this; }


  static final ParseField SIMULATED_ACTIONS = new ParseField("simulated_actions");
  private SimulatedActions _simulatedActions;
  public SimulatedActions getSimulatedActions() { return this._simulatedActions; }
  public ExecuteWatchRequest setSimulatedActions(SimulatedActions val) { this._simulatedActions = val; return this; }


  static final ParseField TRIGGER_DATA = new ParseField("trigger_data");
  private ScheduleTriggerEvent _triggerData;
  public ScheduleTriggerEvent getTriggerData() { return this._triggerData; }
  public ExecuteWatchRequest setTriggerData(ScheduleTriggerEvent val) { this._triggerData = val; return this; }


  static final ParseField WATCH = new ParseField("watch");
  private Watch _watch;
  public Watch getWatch() { return this._watch; }
  public ExecuteWatchRequest setWatch(Watch val) { this._watch = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_debug != null) {
      builder.field(DEBUG.getPreferredName(), _debug);
    }
    if (_actionModes != null) {
      builder.field(ACTION_MODES.getPreferredName());
      _actionModes.toXContent(builder, params);
    }
    if (_alternativeInput != null) {
      builder.field(ALTERNATIVE_INPUT.getPreferredName());
      _alternativeInput.toXContent(builder, params);
    }
    if (_ignoreCondition != null) {
      builder.field(IGNORE_CONDITION.getPreferredName(), _ignoreCondition);
    }
    if (_recordExecution != null) {
      builder.field(RECORD_EXECUTION.getPreferredName(), _recordExecution);
    }
    if (_simulatedActions != null) {
      builder.field(SIMULATED_ACTIONS.getPreferredName());
      _simulatedActions.toXContent(builder, params);
    }
    if (_triggerData != null) {
      builder.field(TRIGGER_DATA.getPreferredName());
      _triggerData.toXContent(builder, params);
    }
    if (_watch != null) {
      builder.field(WATCH.getPreferredName());
      _watch.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ExecuteWatchRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ExecuteWatchRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ExecuteWatchRequest, Void> PARSER =
    new ObjectParser<>(ExecuteWatchRequest.class.getName(), false, ExecuteWatchRequest::new);

  static {
    PARSER.declareBoolean(ExecuteWatchRequest::setDebug, DEBUG);
    PARSER.declareObject(ExecuteWatchRequest::setActionModes, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> ActionExecutionMode.PARSER.apply(p)), ACTION_MODES);
    PARSER.declareObject(ExecuteWatchRequest::setAlternativeInput, (p, t) -> new NamedContainer<>(n -> () -> n,XContentParser::binaryValue), ALTERNATIVE_INPUT);
    PARSER.declareBoolean(ExecuteWatchRequest::setIgnoreCondition, IGNORE_CONDITION);
    PARSER.declareBoolean(ExecuteWatchRequest::setRecordExecution, RECORD_EXECUTION);
    PARSER.declareObject(ExecuteWatchRequest::setSimulatedActions, (p, t) -> SimulatedActions.PARSER.apply(p, t), SIMULATED_ACTIONS);
    PARSER.declareObject(ExecuteWatchRequest::setTriggerData, (p, t) -> ScheduleTriggerEvent.PARSER.apply(p, t), TRIGGER_DATA);
    PARSER.declareObject(ExecuteWatchRequest::setWatch, (p, t) -> Watch.PARSER.apply(p, t), WATCH);
  }

}
