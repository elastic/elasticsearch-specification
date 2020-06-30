
package org.elasticsearch.x_pack.watcher.action;

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
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.x_pack.watcher.transform.*;
import org.elasticsearch.x_pack.watcher.condition.*;

public class Action  implements XContentable<Action> {
  
  static final ParseField ACTION_TYPE = new ParseField("action_type");
  private ActionType _actionType;
  public ActionType getActionType() { return this._actionType; }
  public Action setActionType(ActionType val) { this._actionType = val; return this; }


  static final ParseField NAME = new ParseField("name");
  private String _name;
  public String getName() { return this._name; }
  public Action setName(String val) { this._name = val; return this; }


  static final ParseField THROTTLE_PERIOD = new ParseField("throttle_period");
  private Time _throttlePeriod;
  public Time getThrottlePeriod() { return this._throttlePeriod; }
  public Action setThrottlePeriod(Time val) { this._throttlePeriod = val; return this; }


  static final ParseField FOREACH = new ParseField("foreach");
  private String _foreach;
  public String getForeach() { return this._foreach; }
  public Action setForeach(String val) { this._foreach = val; return this; }


  static final ParseField MAX_ITERATIONS = new ParseField("max_iterations");
  private Integer _maxIterations;
  public Integer getMaxIterations() { return this._maxIterations; }
  public Action setMaxIterations(Integer val) { this._maxIterations = val; return this; }


  static final ParseField TRANSFORM = new ParseField("transform");
  private TransformContainer _transform;
  public TransformContainer getTransform() { return this._transform; }
  public Action setTransform(TransformContainer val) { this._transform = val; return this; }


  static final ParseField CONDITION = new ParseField("condition");
  private ConditionContainer _condition;
  public ConditionContainer getCondition() { return this._condition; }
  public Action setCondition(ConditionContainer val) { this._condition = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_actionType != null) {
      builder.field(ACTION_TYPE.getPreferredName());
      _actionType.toXContent(builder, params);
    }
    if (_name != null) {
      builder.field(NAME.getPreferredName(), _name);
    }
    if (_throttlePeriod != null) {
      builder.field(THROTTLE_PERIOD.getPreferredName());
      _throttlePeriod.toXContent(builder, params);
    }
    if (_foreach != null) {
      builder.field(FOREACH.getPreferredName(), _foreach);
    }
    if (_maxIterations != null) {
      builder.field(MAX_ITERATIONS.getPreferredName(), _maxIterations);
    }
    if (_transform != null) {
      builder.field(TRANSFORM.getPreferredName());
      _transform.toXContent(builder, params);
    }
    if (_condition != null) {
      builder.field(CONDITION.getPreferredName());
      _condition.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public Action fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return Action.PARSER.apply(parser, null);
  }

  public static final ObjectParser<Action, Void> PARSER =
    new ObjectParser<>(Action.class.getName(), false, Action::new);

  static {
    PARSER.declareField(Action::setActionType, (p, t) -> ActionType.PARSER.apply(p), ACTION_TYPE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareString(Action::setName, NAME);
    PARSER.declareObject(Action::setThrottlePeriod, (p, t) -> Time.PARSER.apply(p, t), THROTTLE_PERIOD);
    PARSER.declareString(Action::setForeach, FOREACH);
    PARSER.declareInt(Action::setMaxIterations, MAX_ITERATIONS);
    PARSER.declareObject(Action::setTransform, (p, t) -> TransformContainer.PARSER.apply(p, t), TRANSFORM);
    PARSER.declareObject(Action::setCondition, (p, t) -> ConditionContainer.PARSER.apply(p, t), CONDITION);
  }

}
