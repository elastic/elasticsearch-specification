
package org.elasticsearch.x_pack.watcher;

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
import org.elasticsearch.x_pack.watcher.action.*;
import org.elasticsearch.x_pack.watcher.condition.*;
import org.elasticsearch.x_pack.watcher.input.*;
import org.elasticsearch.x_pack.watcher.acknowledge_watch.*;
import org.elasticsearch.x_pack.watcher.transform.*;
import org.elasticsearch.x_pack.watcher.trigger.*;

public class Watch  implements XContentable<Watch> {
  
  static final ParseField ACTIONS = new ParseField("actions");
  private NamedContainer<String, Action> _actions;
  public NamedContainer<String, Action> getActions() { return this._actions; }
  public Watch setActions(NamedContainer<String, Action> val) { this._actions = val; return this; }


  static final ParseField CONDITION = new ParseField("condition");
  private ConditionContainer _condition;
  public ConditionContainer getCondition() { return this._condition; }
  public Watch setCondition(ConditionContainer val) { this._condition = val; return this; }


  static final ParseField INPUT = new ParseField("input");
  private InputContainer _input;
  public InputContainer getInput() { return this._input; }
  public Watch setInput(InputContainer val) { this._input = val; return this; }


  static final ParseField METADATA = new ParseField("metadata");
  private NamedContainer<String, Object> _metadata;
  public NamedContainer<String, Object> getMetadata() { return this._metadata; }
  public Watch setMetadata(NamedContainer<String, Object> val) { this._metadata = val; return this; }


  static final ParseField STATUS = new ParseField("status");
  private WatchStatus _status;
  public WatchStatus getStatus() { return this._status; }
  public Watch setStatus(WatchStatus val) { this._status = val; return this; }


  static final ParseField THROTTLE_PERIOD = new ParseField("throttle_period");
  private String _throttlePeriod;
  public String getThrottlePeriod() { return this._throttlePeriod; }
  public Watch setThrottlePeriod(String val) { this._throttlePeriod = val; return this; }


  static final ParseField TRANSFORM = new ParseField("transform");
  private TransformContainer _transform;
  public TransformContainer getTransform() { return this._transform; }
  public Watch setTransform(TransformContainer val) { this._transform = val; return this; }


  static final ParseField TRIGGER = new ParseField("trigger");
  private TriggerContainer _trigger;
  public TriggerContainer getTrigger() { return this._trigger; }
  public Watch setTrigger(TriggerContainer val) { this._trigger = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_actions != null) {
      builder.field(ACTIONS.getPreferredName());
      _actions.toXContent(builder, params);
    }
    if (_condition != null) {
      builder.field(CONDITION.getPreferredName());
      _condition.toXContent(builder, params);
    }
    if (_input != null) {
      builder.field(INPUT.getPreferredName());
      _input.toXContent(builder, params);
    }
    if (_metadata != null) {
      builder.field(METADATA.getPreferredName());
      _metadata.toXContent(builder, params);
    }
    if (_status != null) {
      builder.field(STATUS.getPreferredName());
      _status.toXContent(builder, params);
    }
    if (_throttlePeriod != null) {
      builder.field(THROTTLE_PERIOD.getPreferredName(), _throttlePeriod);
    }
    if (_transform != null) {
      builder.field(TRANSFORM.getPreferredName());
      _transform.toXContent(builder, params);
    }
    if (_trigger != null) {
      builder.field(TRIGGER.getPreferredName());
      _trigger.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public Watch fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return Watch.PARSER.apply(parser, null);
  }

  public static final ObjectParser<Watch, Void> PARSER =
    new ObjectParser<>(Watch.class.getName(), false, Watch::new);

  static {
    PARSER.declareObject(Watch::setActions, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> Action.PARSER.apply(pp, null)), ACTIONS);
    PARSER.declareObject(Watch::setCondition, (p, t) -> ConditionContainer.PARSER.apply(p, t), CONDITION);
    PARSER.declareObject(Watch::setInput, (p, t) -> InputContainer.PARSER.apply(p, t), INPUT);
    PARSER.declareObject(Watch::setMetadata, (p, t) -> new NamedContainer<>(n -> () -> n,XContentParser::binaryValue), METADATA);
    PARSER.declareObject(Watch::setStatus, (p, t) -> WatchStatus.PARSER.apply(p, t), STATUS);
    PARSER.declareString(Watch::setThrottlePeriod, THROTTLE_PERIOD);
    PARSER.declareObject(Watch::setTransform, (p, t) -> TransformContainer.PARSER.apply(p, t), TRANSFORM);
    PARSER.declareObject(Watch::setTrigger, (p, t) -> TriggerContainer.PARSER.apply(p, t), TRIGGER);
  }

}
