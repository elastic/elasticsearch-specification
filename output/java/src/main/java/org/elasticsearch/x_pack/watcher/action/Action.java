
package org.elasticsearch.x_pack.watcher.action;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.x_pack.watcher.action.*;
import org.elasticsearch.x_pack.watcher.condition.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.x_pack.watcher.transform.*;

public class Action  implements XContentable<Action> {
  
  static final ParseField ACTION_TYPE = new ParseField("action_type");
  private ActionType _actionType;
  public ActionType getActionType() { return this._actionType; }
  public Action setActionType(ActionType val) { this._actionType = val; return this; }

  static final ParseField CONDITION = new ParseField("condition");
  private ConditionContainer _condition;
  public ConditionContainer getCondition() { return this._condition; }
  public Action setCondition(ConditionContainer val) { this._condition = val; return this; }

  static final ParseField FOREACH = new ParseField("foreach");
  private String _foreach;
  public String getForeach() { return this._foreach; }
  public Action setForeach(String val) { this._foreach = val; return this; }

  static final ParseField MAX_ITERATIONS = new ParseField("max_iterations");
  private int _maxIterations;
  private boolean _maxIterations$isSet;
  public int getMaxIterations() { return this._maxIterations; }
  public Action setMaxIterations(int val) {
    this._maxIterations = val;
    _maxIterations$isSet = true;
    return this;
  }

  static final ParseField NAME = new ParseField("name");
  private String _name;
  public String getName() { return this._name; }
  public Action setName(String val) { this._name = val; return this; }

  static final ParseField THROTTLE_PERIOD = new ParseField("throttle_period");
  private String _throttlePeriod;
  public String getThrottlePeriod() { return this._throttlePeriod; }
  public Action setThrottlePeriod(String val) { this._throttlePeriod = val; return this; }

  static final ParseField TRANSFORM = new ParseField("transform");
  private TransformContainer _transform;
  public TransformContainer getTransform() { return this._transform; }
  public Action setTransform(TransformContainer val) { this._transform = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_actionType != null) {
      builder.field(ACTION_TYPE.getPreferredName());
      _actionType.toXContent(builder, params);
    }
    if (_condition != null) {
      builder.field(CONDITION.getPreferredName());
      _condition.toXContent(builder, params);
    }
    if (_foreach != null) {
      builder.field(FOREACH.getPreferredName(), _foreach);
    }
    if (_maxIterations$isSet) {
      builder.field(MAX_ITERATIONS.getPreferredName(), _maxIterations);
    }
    if (_name != null) {
      builder.field(NAME.getPreferredName(), _name);
    }
    if (_throttlePeriod != null) {
      builder.field(THROTTLE_PERIOD.getPreferredName(), _throttlePeriod);
    }
    if (_transform != null) {
      builder.field(TRANSFORM.getPreferredName());
      _transform.toXContent(builder, params);
    }
  }

  @Override
  public Action fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return Action.PARSER.apply(parser, null);
  }

  public static final ObjectParser<Action, Void> PARSER =
    new ObjectParser<>(Action.class.getName(), false, Action::new);

  static {
    PARSER.declareField(Action::setActionType, (p, t) -> ActionType.PARSER.apply(p), ACTION_TYPE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareObject(Action::setCondition, (p, t) -> ConditionContainer.PARSER.apply(p, t), CONDITION);
    PARSER.declareString(Action::setForeach, FOREACH);
    PARSER.declareInt(Action::setMaxIterations, MAX_ITERATIONS);
    PARSER.declareString(Action::setName, NAME);
    PARSER.declareString(Action::setThrottlePeriod, THROTTLE_PERIOD);
    PARSER.declareObject(Action::setTransform, (p, t) -> TransformContainer.PARSER.apply(p, t), TRANSFORM);
  }

}
