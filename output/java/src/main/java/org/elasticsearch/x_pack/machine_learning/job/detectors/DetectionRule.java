
package org.elasticsearch.x_pack.machine_learning.job.detectors;

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
import org.elasticsearch.x_pack.machine_learning.job.detectors.*;
import org.elasticsearch.common_abstractions.infer.field.*;

public class DetectionRule  implements XContentable<DetectionRule> {
  
  static final ParseField ACTIONS = new ParseField("actions");
  private List<RuleAction> _actions;
  public List<RuleAction> getActions() { return this._actions; }
  public DetectionRule setActions(List<RuleAction> val) { this._actions = val; return this; }


  static final ParseField CONDITIONS = new ParseField("conditions");
  private List<RuleCondition> _conditions;
  public List<RuleCondition> getConditions() { return this._conditions; }
  public DetectionRule setConditions(List<RuleCondition> val) { this._conditions = val; return this; }


  static final ParseField SCOPE = new ParseField("scope");
  private NamedContainer<Field, FilterRef> _scope;
  public NamedContainer<Field, FilterRef> getScope() { return this._scope; }
  public DetectionRule setScope(NamedContainer<Field, FilterRef> val) { this._scope = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_actions != null) {
      builder.array(ACTIONS.getPreferredName(), _actions);
    }
    if (_conditions != null) {
      builder.array(CONDITIONS.getPreferredName(), _conditions);
    }
    if (_scope != null) {
      builder.field(SCOPE.getPreferredName());
      _scope.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public DetectionRule fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DetectionRule.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DetectionRule, Void> PARSER =
    new ObjectParser<>(DetectionRule.class.getName(), false, DetectionRule::new);

  static {
    PARSER.declareFieldArray(DetectionRule::setActions, (p, t) -> RuleAction.PARSER.apply(p), ACTIONS, ObjectParser.ValueType.STRING_ARRAY);
    PARSER.declareObjectArray(DetectionRule::setConditions, (p, t) -> RuleCondition.PARSER.apply(p, t), CONDITIONS);
    PARSER.declareObject(DetectionRule::setScope, (p, t) -> new NamedContainer<>(n -> () -> new Field(n),pp -> FilterRef.PARSER.apply(pp, null)), SCOPE);
  }

}
